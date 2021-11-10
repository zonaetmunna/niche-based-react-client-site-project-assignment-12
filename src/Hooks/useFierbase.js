import initializationAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";


initializationAuthentication();

const useFirebase = () => {
     // state for user
     const [user, setUser] = useState({});
     // state for error
     const [error, setError] = useState('');
     // 
     const [isLoading, setIsLoading] = useState(true);
     // 
     const [admin, setAdmin] = useState(false);
     // 
     const [token, setToken] = useState('');



     const auth = getAuth();

     // user create handle
     const registerUser = (email, password, name, history) => {
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    const newUser = { email, displayName: name }
                    setError('')
                    saveUser(email, name, 'POST');
                    updateProfile(auth.currentUser, {
                         displayName: name
                    }).then(() => {

                    }).catch((error) => {

                    });

               })
               .catch((error) => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));
     };
     // login user handle
     const loginUser = (email, password, location, history) => {
          setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user)
                    setError('');

                    // redirect
                    const destination = location?.state?.from || '/';
                    history.replace(destination)

               })
               .catch((error) => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));
     }

     // user observation
     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user);
                    getIdToken(user)
                         .then(idToken => {
                              setToken(idToken);
                         })
               }
               else {
                    setUser({})
               }
               setIsLoading(false);
          });
          return () => unsubscribed;
     }, [auth])

     // user log out handle
     const logOut = () => {
          setIsLoading(true);
          signOut(auth).then(() => {

          })
               .catch((error) => {

               })
               .finally(() => setIsLoading(false))
     }
     // 
     useEffect(() => {
          const url = `https://young-depths-90342.herokuapp.com/users/${user.email}`;
          fetch(url)
               .then(res => res.json())
               .then(data => setAdmin(data.admin));

     }, [user.email])

     // saveUser
     const saveUser = (email, displayName, method) => {

          const user = { email, displayName }
          const url = 'https://young-depths-90342.herokuapp.com/users';
          fetch(url, {
               method: method,
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then(res => res.json())
     }


     return {
          registerUser,
          loginUser,
          user,
          logOut,
          error,
          isLoading,
          admin,
          setToken
     }

}

export default useFirebase;
