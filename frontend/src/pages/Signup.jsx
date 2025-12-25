import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate=useNavigate()
    const [formData,setFormData]= useState({
        fullname:"",
        phone:"",
        email:"",
        password:"",
        company:""
    })
    const onChangeHandler=(e)=>{
        console.log(e.target.name,e.target.value);
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSubmitHandler=async(e)=>{
        try {
           e.preventDefault()
        const res=await axios.post(`${import.meta.env.VITE_URL}/api/signup`,formData);
        if(res.data.status){
          alert(`${res.data.msg}`)
        } 
        navigate(`/dashboard/${res.data.email}`)
        } catch (error) {
            alert(error.response?.data?.msg || "Signup failed");;
        }

        
    }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md px-5 mt-10">
        {/* heading */}
        <h1 className=" font-rubik font-medium text-3xl ">
          Create your <br /> PopX account
        </h1>

        {/* form */}
        <form className="mt-6 space-y-4" onSubmit={onSubmitHandler} >
          {/* fullname */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-[#F9F9F9] px-1 text-sm text-purple-600 font-medium">

              Full Name<span className="text-red-500">*</span>
            </label>

            <input
            required
            name="fullname"
              type="text"
              onChange={onChangeHandler}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* phone */}
          <div className="relative">
           <label className="absolute -top-1 left-3 bg-[#F9F9F9] px-1 text-sm text-purple-600 font-medium">

              Phone number<span className="text-red-500">*</span>
            </label>
            <input
            required
            name="phone"
              type="text"
              onChange={onChangeHandler}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* email */}
          <div className="relative">
            <label className="absolute -top-1 left-3 bg-[#F9F9F9] px-1 text-sm text-purple-600 font-medium">

              Email address<span className="text-red-500">*</span>
            </label>
            <input
            required
            name="email"
            onChange={onChangeHandler}
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* password */}
          <div className="relative">
           <label className="absolute -top-1 left-3 bg-[#F9F9F9] px-1 text-sm text-purple-600 font-medium">

              Password<span className="text-red-500">*</span>
            </label>
            <input
            required
            name="password"
            onChange={onChangeHandler}
              type="password"
              
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* company */}
          <div className="relative">
            <label className="absolute -top-1 left-3 bg-[#F9F9F9] px-1 text-sm text-purple-600 font-medium">
              Company name
            </label>
            <input

            name="company"
              type="text"
            onChange={onChangeHandler}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>

        
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?
            </p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  className="accent-purple-600"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  className="accent-purple-600"
                />
                No
              </label>
            </div>
          </div>

          {/* button */}
          <button
            type="submit"
            
            className="mt-9 cursor-pointer hover:bg-purple-600 w-full rounded-lg bg-[#6C2BD9] py-3 text-white font-medium"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
