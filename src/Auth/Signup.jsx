// import React, { useState } from "react";

// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import { IoCloseOutline } from "react-icons/io5";

// import { FiShoppingBag } from "react-icons/fi";
// import { MdMarkEmailUnread } from "react-icons/md";
// import { IoPersonCircleSharp } from "react-icons/io5";
// import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// const Signup = ({setLogin, setPopup}) => {
//   // const [login, setLogin] = useState(false)
//   const [token, setToken]=useState(true)
//   const [name, setName]=useState("")
//   const [email, setEmail]=useState("")
//   const [password, setPassword]=useState("")
//   const [email2, setEmail2]=useState("")
//   const [password2, setPassword2]=useState("")
//    const [loading, setLoading]=useState(false)
//   const dispatch = useDispatch()
  // const HandleSubmit = () =>{
  //   if (!email || !password || !name){
  //     toast.error("Please Fill All Details")
  //   } else {
  //     setLoading(true)
  //    const url = "https://bulkemailapplanguagebackend.onrender.com/api/auth/signup"
  //    const datas = {name, email, password}
  //    axios.post(url, datas)
  //    .then((res)=>{
  //      console.log(res);
  //      toast.success(res.data.message)
  //      setLoading(false)
  //      // setLogin(true)
  //      setTimeout(()=>{
  //        setLogin(true)
  //      }, 2000)
  //    })
  //    .catch((error)=>{
  //      console.log(error);
  //      toast.error(error.responce.data)
  //      setLoading(false)
  //    })
  //   }
  // }

//   return (
//     <>
//         <div className="flex items-center justify-between w-[100%] h-[10%] ">
//           <div>
//             <h1>Sign Up Now</h1>
//           </div>
//           <div>
//             <IoCloseOutline
//               className="text-2xl cursor-pointer "
//               onClick={() => setPopup(false)}
//             />
//           </div>
//         </div>
//         {/* form section */}
//         <div className=" w-[100%] h-[80%]  flex gap-[20px] items-center
//           justify-center flex-col ">
//           <input
//             type="text"
//             onChange={(e)=> setName(e.target.value)}
//             placeholder="User name"
//             className=" w-[78%] pl-[10px] rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 h-[14%] "
//           />
//           <input
//             type="email"
//             onChange={(e)=> setEmail(e.target.value)}
//             placeholder="Email"
//             className=" w-[78%] pl-[10px]  rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 h-[14%]"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e)=> setPassword(e.target.value)}
//             className=" w-[78%] pl-[10px]  rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 h-[14%]"
//           />
//           <div className="flex justify-center w-[100%] h-[20%]">
//             <button onClick={HandleSubmit} className="bg-gradient-to-r from-primary w-[40%] h-[50%]  to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
//             { loading ? "Loading..." :"Sign Up" }
//             </button>
//             <Toaster/>

//           </div>
//         </div>
//         <div className=" w-[100%] h-[10%] flex items-center justify-center  ">
//           <h3 className="gap-[10px] ">Already have an Account?  <span onClick={() => setLogin(true)} className="text-[#6666d3] ">Login</span></h3>
//         </div>
//     </>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const SignUp = ({ togglePage, isDarkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
     const [loading, setLoading]=useState(true)

  const HandleSubmit = () =>{
    if (!email || !password || !name){
      toast.error("Please Fill All Details")
    } else {
      setLoading(false)
     const url = "https://bulkemailapplanguagebackend.onrender.com/api/auth/signup"
     const datas = {name, email, password}
     axios.post(url, datas)
     .then((res)=>{
       console.log(res);
       toast.success(res.data.message)
       setLoading(true)
       // setLogin(true)
       setTimeout(()=>{
        //  setLogin(true)
         togglePage()
       }, 2000)
     })
     .catch((error)=>{
       console.log(error);
       toast.error(error.response.data)
       setLoading(true)
     })
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 
             text-white dark:text-black">Create Account</h2>
      <p
        className="text-center mb-8 text-sm 
           text-gray-300 dark:text-gray-500"
        
      >
        Sign up to get started
      </p>
      <Toaster/>
      {/* Name Field */}
      <div className="mb-6">
        <label
          className="block mb-2 font-semibold text-sm 
             text-white dark:text-black"
         
        >
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-3 border rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 ${
            
               bg-gray-700 border-gray-600 text-white focus:ring-blue-500
        dark:bg-white border-gray-300 dark:text-black focus:ring-blue-400"
          
        />
      </div>

      {/* Email Field */}
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

      {/* Password Field */}
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

      {/* Sign-Up Button */}
      <button
        onClick={HandleSubmit}
        className="w-full py-4 rounded-lg shadow-md text-lg transform transition-all duration-300 ${
         
            bg-blue-600 hover:bg-blue-700 text-white
            dark:bg-blue-500 hover:bg-blue-600 text-white"
       
      >
      { !loading ? "Loading..." :"Sign Up" }
      </button>

      {/* Switch to Login */}
      <p className="text-center text-white dark:text-black mt-8 text-sm">
        Already have an account?{" "}
        <span
          onClick={togglePage}
          className="cursor-pointer hover:underline 
            text-blue-400 dark:text-blue-600"
         
        >
          Log In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
