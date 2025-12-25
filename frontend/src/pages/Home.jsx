import React from 'react'
import {useNavigate} from "react-router-dom"
const Home = () => {
    const navigate=useNavigate()
  return (
    <div className="flex min-h-screen items-end sm:items-center lg:items-center">
      <div className="  mb-[25px] mx-[15px] sm:mx-auto w-full sm:w-[380px] md:w-[420px] md:text-center lg:text-center ">
        <h1 className="font-rubik font-medium m-0 text-3xl">
          Welcome to PopX
        </h1>
        <p className="mt-2 tracking-wide text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipisicing elit,
        </p>
        {/* button for creating new account */}
        <button className=' mt-6 w-full hover:bg-purple-700  rounded-lg bg-[#6C2BD9] py-3 text-white font-normal lg:w-[250px] md:w-[250px]' onClick={()=>{navigate("/Signup")}}>
            Create Account
        </button>
        {/* button for logging in */}
        <button className=' mt-2 w-full rounded-lg hover:bg-gray-400 bg-gray-300 py-3 text-black font-medium lg:w-[250px] md:w-[250px]' onClick={()=>{navigate("/Login")}}>
            Already Registered? Login
        </button>
        

      </div>
    </div>
  );
};

export default Home;
