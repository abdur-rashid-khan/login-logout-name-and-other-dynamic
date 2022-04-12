import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};

export default App;
