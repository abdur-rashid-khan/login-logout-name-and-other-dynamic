import React from 'react';
import { Link } from 'react-router-dom';
import LoginHookWithGoogle from '../Hooks/LoginHookWithGoogle/LoginHookWithGoogle';
import './Header.css'

const Header = () => {
   const {user ,logOutGoogle}= LoginHookWithGoogle()
   return (
      <div className='header-items'>
         <Link to={'/'}> Home</Link>
         {
            user? <button onClick={logOutGoogle}>logOut</button>:
            <Link to={'/login'}>Login</Link>
         }
      </div>
   );
};

export default Header;