import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        `${import.meta.env.VITE_URL}/api/login`,
        formData
      );
      console.log(res.data);
      if (res.data.status) {
        navigate(`/dashboard/${res.data.email}`);
      } else {
        alert(res.data.msg);
      }
    } catch (error) {
      console.log(error?.response?.data?.msg || "Login Failed");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex justify-center">
        <div className="w-full max-w-md px-5 ">
          <h2 className="text-3xl tracking-wide mt-[40px] font-rubik font-medium">
            Signin to your <br /> PopX account
          </h2>
          <p className="my-[15px] text-xl text-gray-500 tracking-wide">
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit,
          </p>

          <div>
            {/* form */}
            <form className="mt-6 space-y-4" onSubmit={onSubmitHandler}>
              {/* email */}
              <div className="relative">
                {" "}
                <label
                  htmlFor=""
                  name="email"
                  className="absolute -top-2 left-3 bg-[#F9F9F9] pr-3 px-1 text-sm text-purple-600 font-medium"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="text"
                  onChange={onChangeHandler}
                  placeholder="Enter email address"
                  className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:border-purple-500"
                />
              </div>
              {/* password */}
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-[#F9F9F9] px-1 pr-8 text-sm text-purple-600 font-medium">
                  Password
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="Enter password"
                  onChange={onChangeHandler}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="mt-9 w-full rounded-lg text-lg cursor-pointer bg-gray-300 hover:bg-[#6C2BD9] py-3 text-white font-medium cursor-pointer"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
