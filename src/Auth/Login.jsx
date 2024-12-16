// import React, { useState } from 'react';

// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import { IoCloseOutline } from "react-icons/io5";

// // import DarkMode from "./DarkMode";
// import { FiShoppingBag } from "react-icons/fi";
// import { MdMarkEmailUnread } from "react-icons/md";
// import { IoPersonCircleSharp } from "react-icons/io5";
// import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { Addtoken, AllData } from '../components/Global/Slice';
// import { useNavigate } from 'react-router-dom';
// // import { Addtoken } from "../Global/Slice";
// // import Login from "../../Auth/Login";
// const Login = ({ setLogin, setPopup}) => {

//   // const [login, setLogin] = useState(false)
  
//   const [loading, setLoading]=useState(false)
//   const [email, setEmail]=useState("")
//   const [password, setPassword]=useState("")
//   const [email2, setEmail2]=useState("")
//   const [password2, setPassword2]=useState("")
//   const dispatch = useDispatch()
//   const Nav = useNavigate()


//   const HandleLogin = () => {
//     if(!email || !password ){
//       toast.error("Please Fill All Details")
//     } else {
//       setLoading(true)
//       const url = "http://localhost:1100/api/auth/login"
//       const data2 ={email , password }
//       axios.post(url, data2)
//       .then((res)=>{
//         console.log(res);
//         setLoading(false)
//         toast.success("Successful Loged in")
//         dispatch(Addtoken(res.data.token))
//         dispatch(AllData(res.data.user))
//         setPopup(false)
//         setTimeout(()=>{
//          Nav(`/dashboard`)
//         }, 2000)

//       })
//       .catch((error)=>{
//         console.log(error);
//         toast.error(error.response.data.message)
//         setLoading(false)

//       })
//     }
//  }
//   return (
//     <>
    
//         {/* header */}
//         <div className="flex items-center sm:w-[100%] sm:w-[100%] justify-between w-[100%] h-[10%] ">
//           <div>
//             <h1>Login  Now</h1>
//           </div>
//           <div>
//             <IoCloseOutline
//               className="text-2xl cursor-pointer "
//               onClick={() => setPopup(false)}
//             />
//           </div>
//         </div>
//         {/* form section */}
//         <div className=" w-[100%] h-[80%]  flex gap-[40px] items-center
//           justify-center flex-col ">
       
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={(e)=> setEmail(e.target.value)}
//             className=" w-[80%] pl-[10px]  rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 h-[15%]"
//           />
//           <Toaster/>
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e)=> setPassword(e.target.value)}

//             className=" w-[80%] pl-[10px]  rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 h-[15%]"
//           />
//           <div className="flex justify-center w-[100%] h-[20%]">
//             <button onClick={HandleLogin}  className="bg-gradient-to-r from-primary w-[40%] h-[50%]  to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
//             { loading ? "Loading..." :"Login" }
//             </button>
//           </div>
//         </div>
//         <div className=" w-[100%] h-[10%] flex items-center justify-center  ">
//           <h3  className="gap-[10px] ">Don`t` have an Account?  <span onClick={()=> setLogin(false)} className="text-[#6666d3] ">Sign Up</span></h3>
//         </div>
//     </>
//   );
// }

// export default Login;
// import React, { useState } from 'react';

// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import { IoCloseOutline } from "react-icons/io5";

// // import DarkMode from "./DarkMode";
// import { FiShoppingBag } from "react-icons/fi";
// import { MdMarkEmailUnread } from "react-icons/md";
// import { IoPersonCircleSharp } from "react-icons/io5";
// import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { Addtoken, AllData } from '../components/Global/Slice';
// import { useNavigate } from 'react-router-dom';
// // import { Addtoken } from "../Global/Slice";
// // import Login from "../../Auth/Login";

// const Login = ({ setLogin, setPopup }) => {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const Nav = useNavigate();

  // const HandleLogin = () => {
  //   if (!email || !password) {
  //     toast.error("Please Fill All Details");
  //   } else {
  //     setLoading(true);
  //     const url = "https://bulkemailapplanguagebackend.onrender.com/api/auth/login";
  //     const data2 = { email, password };
  //     axios
  //       .post(url, data2)
  //       .then((res) => {
  //         console.log(res);
  //         setLoading(false);
  //         toast.success("Successfully Logged in");
  //         dispatch(Addtoken(res.data.token));
  //         dispatch(AllData(res.data.user));
  //         setPopup(false);
  //         setTimeout(() => {
  //           Nav(`/dashboard`);
  //         }, 2000);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         toast.error(error.response.data.message);
  //         setLoading(false);
  //       });
  //   }
  // };

//   return (
//     <>
//       {/* Header */}
//       <div className="flex items-center justify-between w-[40%] bg-[red] h-[10%]">
//         <div>
//           <h1 className="text-lg font-semibold">Login Now</h1>
//         </div>
//         <div>
//           <IoCloseOutline
//             className="text-2xl cursor-pointer"
//             onClick={() => setPopup(false)}
//           />
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="w-full h-[80%] flex flex-col gap-5 items-center justify-center">
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] pl-3 py-2 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800"
//         />
//         <Toaster />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] pl-3 py-2 rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800"
//         />
//         <div className="flex justify-center w-full h-[20%]">
//           <button
//             onClick={HandleLogin}
//             className="bg-gradient-to-r from-primary to-secondary w-[50%] sm:w-[40%] lg:w-[30%] xl:w-[20%] hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
//           >
//             {loading ? "Loading..." : "Login"}
//           </button>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="w-full h-[10%] flex items-center justify-center">
//         <h3 className="text-sm">
//           Don’t have an Account?{" "}
//           <span
//             onClick={() => setLogin(false)}
//             className="text-[#6666d3] cursor-pointer"
//           >
//             Sign Up
//           </span>
//         </h3>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Addtoken, AllData } from '../components/Global/Slice';
import { useNavigate } from 'react-router-dom';


const Login = ({ togglePage, isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const Nav = useNavigate();

  const HandleLogin = () => {
    if (!email || !password) {
      toast.error("Please Fill All Details");
    } else {
      setLoading(true);
      const url = "https://bulkemailapplanguagebackend.onrender.com/api/auth/login";
      const data2 = { email, password };
      axios
        .post(url, data2)
        .then((res) => {
          console.log(res);
          setLoading(false);
          toast.success("Successfully Logged in");
          dispatch(Addtoken(res.data.token));
          dispatch(AllData(res.data.user));
          setTimeout(() => {
            Nav(`/`);
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response?.data?.message);
          setLoading(false);
        });
    }
  };


  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 
             text-white dark:text-black">Welcome Back</h2>
      <p
        className="text-center mb-8 text-sm 
        text-gray-300 dark:text-gray-500"
      >
        Log in to continue
      </p>
      <Toaster />
      <div className="mb-6">
        <label
          className="block mb-2 font-semibold text-sm 
             text-white dark:text-black"
        >
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 ${
            
               bg-gray-700 border-gray-600 text-white focus:ring-blue-500
        dark:bg-white border-gray-300 dark:text-black focus:ring-blue-400"
        />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 font-semibold text-sm 
             text-white dark:text-black"
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-3 border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 ${
            
               bg-gray-700 border-gray-600 text-white focus:ring-blue-500
        dark:bg-white border-gray-300 dark:text-black focus:ring-blue-400"
        />
      </div>
      <button
        onClick={HandleLogin}
        className="w-full py-4 rounded-lg shadow-md text-lg transform transition-all duration-300 ${
         
            bg-blue-600 hover:bg-blue-700 text-white
            dark:bg-blue-500 hover:bg-blue-600 text-white"
      >
         {loading ? "Loading..." : "Login"}
      </button>
      <p className="text-center text-white dark:text-black mt-8 text-sm">
        Don't have an account?{" "}
        <span
          onClick={togglePage}
          className="cursor-pointer hover:underline 
            text-blue-400 dark:text-blue-600"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
