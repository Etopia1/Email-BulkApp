import React, { useState } from "react";
import Signup from './Auth/Signup';
import DarkMode from './components/Navbar/DarkMode';
import Login from './Auth/Login';

const LoginHolder = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  return  ( 
    <div
    className="min-h-screen flex items-center justify-center 
      bg-gray-900 dark:bg-gray-100
   transition-colors duration-500 "
  >
    {/* Dark/Light Mode Toggle Button */}
    <div className="absolute top-4 right-4">
   < DarkMode/>
    </div>

    {/* Main Form Container */}
    <div
      className="w-full max-w-lg p-10 rounded-2xl 
       
           bg-gray-800 text-white
           dark:bg-white text-gray-900 shadow-lg
       transition-transform duration-500 transform hover:scale-105"
    >
      {isLogin ? (
        <Login
          togglePage={() => setIsLogin(false)}
          isDarkMode={isDarkMode}
        />
      ) : (
        <Signup
          togglePage={() => setIsLogin(true)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  </div>
  );
}

export default LoginHolder;
