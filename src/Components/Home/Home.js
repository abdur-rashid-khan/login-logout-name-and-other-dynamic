import React from 'react';
import LoginHookWithGoogle from '../Hooks/LoginHookWithGoogle/LoginHookWithGoogle';
import './Home.css'

const Home = () => {
   const {logInGoogle,message , user ,logOutGoogle}= LoginHookWithGoogle()
   return (
      <div >
         <p>{
            user?user.displayName:'voot' 
         }</p>
         <p>
            {
               message?message:''
            }
         </p>
         {
            user?<button id='btn' onClick={logOutGoogle}> logOut</button>:<button onClick={logInGoogle} id='btn'  className='bg-sky-500'>LogIn</button> 
         }
      </div>
   );
};

export default Home;