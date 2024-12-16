// // import React, { useState, useEffect } from 'react';
// // import { MdMarkEmailUnread } from "react-icons/md";
// // import { useSelector } from 'react-redux';
// // import DarkMode from '../components/Navbar/DarkMode';


// // const Header = () => {
 
// //   const name= useSelector((state) => state?.useData?.name)
// //   console.log(name)
// //   return (
// //     <div className="  from-primary to-secondary  text-[black]  h-[100%] w-[100%] flex items-center justify-center dark:text-[white] shadow-md">
// //       <div className="flex w-[100%] pl-[15px] pr-[10px] h-[100%] justify-between items-center">
// //         {/* Title */}
// //         <h1 className="text-3xl font-semibold flex  justify-center items-center gap-[10px] ">
// //           <MdMarkEmailUnread size={29} color='blue'/> Emailer
// //         </h1>

// //         {/* User Profile / Log Out Button */}
// //         <div className="flex items-center space-x-4">
// //           <span className="text-[18px]">Welcome, {name} </span>
        
// //           <DarkMode/>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;


// // import React, { useState } from 'react';
// // import { MdMarkEmailUnread } from "react-icons/md";
// // import { useSelector } from 'react-redux';
// // import DarkMode from '../components/Navbar/DarkMode'; // Keep DarkMode here in the header
// // import { Link } from 'react-router-dom'; // For navigation

// // const Headaer = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
// //   const name = useSelector((state) => state?.userData?.name);

// //   // Handle logout
// //   const handleLogout = () => {
// //     // Add your logout logic here (e.g., clearing tokens, resetting state)
// //     console.log("Logged out");
// //     window.location.href = '/login'; // Redirect to login page
// //   };

// //   return (
// //     <div className="relative items-center flex-row justify-between h-full flex  w-full">
// //       {/* Sidebar */}
// //       <div
// //         className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform transform ${
// //           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
// //         } md:translate-x-0 md:block`}
// //       >
// //         <div className="p-4">
// //           <div className="flex justify-between items-center mb-4">
// //             <h1 className="text-3xl font-semibold flex justify-center items-center gap-2">
// //               <MdMarkEmailUnread size={29} color='blue' /> Emailer
// //             </h1>
// //             {/* Close Button for Sidebar */}
// //             <button
// //               className="text-white text-2xl"
// //               onClick={() => setIsSidebarOpen(false)}
// //             >
// //               ×
// //             </button>
// //           </div>

// //           {/* Sidebar Options */}
// //           <div className="space-y-4">
// //             <span className="text-lg">Welcome, {name}</span>
// //             <Link
// //               to="/home"
// //               className="block py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
// //             >
// //               Home
// //             </Link>
// //             <button
// //               onClick={handleLogout}
// //               className="block py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
// //             >
// //               Logout
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main content area */}
// //       <div className="md:ml-64 p-4">
// //         {/* Mobile Menu Button */}
// //         <button
// //           className="md:hidden p-2 text-2xl"
// //           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// //         >
// //           ☰
// //         </button>

// //         {/* Main content goes here */}
// //         <div className="content flex  items-center justify-center ">
// //           <h2 className="text-3 font-semibold">Welcome to the Dashboard</h2>
// //           {/* Add your content here */}
// //         </div>
// //       </div>

// //       {/* Dark Mode Toggle in the Header */}
// //       <div className="absolute top-0 right-0 p-4">
// //         <DarkMode />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Headaer;

// import React, { useState } from 'react';
// import { MdMarkEmailUnread } from "react-icons/md";
// import { useSelector } from 'react-redux';
// import DarkMode from '../components/Navbar/DarkMode'; // Keep DarkMode here in the header
// import { Link } from 'react-router-dom'; // For navigation
// import { Addtoken, clearUser } from "../components/Global/Slice"; // Import your Redux actions
// import { useDispatch } from "react-redux";

// const Headaer = () => {
//   const dispatch = useDispatch();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
//   const name = useSelector((state) => state?.userData?.name);

//   // Handle logout
//   const handleLogout = () => {
//     dispatch(clearUser()); // Clear user data
//    // Redirect to login page after logout
//   };

//   return (
//     <div className="relative h-full w-full">
//       {/* Sidebar - Hidden on laptop or larger screens */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:hidden`} // Use md:hidden to hide sidebar on laptop or larger screens
//       >
//         <div className="p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-3xl font-semibold flex justify-center items-center gap-2">
//               <MdMarkEmailUnread size={29} color='blue' /> Emailer
//             </h1>
//             {/* Close Button for Sidebar */}
//             <button
//               className="text-white text-2xl"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               ×
//             </button>
//           </div>

//           {/* Sidebar Options */}
//           <div className="space-y-4">
//             <span className="text-lg">Welcome, {name}</span>
//             <Link
//               to="/home"
//               className="block py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
//             >
//               Home
//             </Link>
//             <button
//               onClick={handleLogout}
//               className="block py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main content area */}
//       <div className="md:ml-64 p-4">
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2 text-2xl"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           ☰
//         </button>

//         {/* Main content goes here */}
//         <div className="content">
//           <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
//           {/* Add your content here */}
//         </div>
//       </div>

//       {/* Dark Mode Toggle in the Header */}
//       <div className="absolute top-0 right-0 p-4">
//         <DarkMode />
//       </div>
//     </div>
//   );
// };

// export default Headaer;

import React, { useState } from 'react';
import { MdMarkEmailUnread, MdLogout } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import DarkMode from '../components/Navbar/DarkMode'; // Dark mode toggle
import { Link } from 'react-router-dom'; // For navigation
import { clearUser } from "../components/Global/Slice"; // Import Redux action

const Headaer = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const name = useSelector((state) => state?.userData?.name);

  // Handle logout
  const handleLogout = () => {
    dispatch(clearUser()); // Clear user data
    window.location.href = '/#/login'; // Redirect to login page after logout
  };

  return (
    <div className="relative h-full w-full">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col justify-between h-full p-4">
          {/* Sidebar Header */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-semibold flex justify-center items-center gap-2">
                <MdMarkEmailUnread size={29} color="blue" /> Emailer
              </h1>
              {/* Close Button for Sidebar */}
              <button
                className="text-white text-2xl md:hidden"
                onClick={() => setIsSidebarOpen(false)}
              >
                ×
              </button>
            </div>
            {/* Sidebar Options */}
            <div className="space-y-4">
              <span className="text-lg block mb-4">Welcome, {name}</span>
              <Link
                to="/"
                className="block py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Home
              </Link>
            </div>
          </div>
          {/* Logout Button */}
          <div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 py-2 px-4 w-full rounded-md hover:bg-red-600 transition duration-200"
            >
              <MdLogout size={20} /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="md:ml-64 p-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-2xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        {/* Main content goes here */}
        <div className="content">
          <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
          {/* Add your content here */}
        </div>
      </div>

      {/* Dark Mode Toggle in the Header */}
      <div className="absolute top-0 right-0 p-4">
        <DarkMode />
      </div>
    </div>
  );
};

export default Headaer;
