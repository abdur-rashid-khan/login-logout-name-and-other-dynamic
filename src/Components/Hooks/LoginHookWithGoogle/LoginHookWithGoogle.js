import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const LoginHookWithGoogle = () => {
   const [user , setUser] =useState('');
   const [message , setMassages]=useState('');


   const logInGoogle =()=>{
      signInWithPopup(auth,provider)
      .then(result =>{
         setUser(result.user)
         console.log((result.user))
         setMassages('logIn successfully');
      }).catch(error =>{
         console.log(error);
      })
   }
   useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
         setUser(user);
      })
   },[])
   // logout
   const logOutGoogle =()=>{
      signOut(auth)
      setMassages('logOut successfully');
   }
   return (
      {user ,message, logInGoogle , logOutGoogle}
   );
};

export default LoginHookWithGoogle;