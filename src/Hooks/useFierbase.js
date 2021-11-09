import initializationAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializationAuthentication();

const useFirebase = () => {
     // state for user
     const [user, setUser] = useState({});
     // state for error
     const [error, setError] = useState('');
     // 
     const [isLoading, setIsLoading] = useState(true);


     const auth = getAuth();

     // user create handle
     const registerUser = (email, password, name) => {
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    const user = userCredential.user;
                    setError('')
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
                    setUser(user)
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
          signOut(auth).then(() => {

          })
               .catch((error) => {

               });
     }


     return {
          registerUser,
          loginUser,
          user,
          logOut,
          error,
          isLoading
     }

}

export default useFirebase;
