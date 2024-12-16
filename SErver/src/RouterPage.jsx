import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Homepage from './EmailApp/Homepage';
import PrivaRoue from './PrivaRoue';
import Dashboard from './EmailApp/Dashboard';

const RouterPage = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/'  element={<Homepage/>}/>
            <Route element={<PrivaRoue/>} children={[
              <Route path='/dashboard' element={<Dashboard/>}/>
            ]}/> 
            
            {/* <Route path='/signup' element={<Signup/>}/> */}
        </Routes>
    </HashRouter>
  );
}

export default RouterPage;
