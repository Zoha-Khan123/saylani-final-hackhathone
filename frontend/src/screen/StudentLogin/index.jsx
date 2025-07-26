import React from "react";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen max-w-[500px] mx-auto px-4">
      <div className="space-y-6 w-full max-w-[400px]">
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Student Portal
        </h1>

        <form className="flex flex-col w-full space-y-4 p-6 border border-gray rounded-lg shadow-sm bg-white">
          <div className="space-y-1">
            <h1 className="font-semibold text-lg text-gray-800">Login</h1>
            <p className="text-sm text-darkgray">
              Kindly provide the CNIC number and password
            </p>
          </div>

          <input
            type="password"
            placeholder="Password"
            className="border border-gray rounded-md p-3 text-sm"
          />

          <input
            type="number"
            placeholder="CNIC"
            className="border border-gray rounded-md p-3 text-sm "
          />

          <button className="bg-black hover:bg-gray-800 text-white px-20 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ">
            Login
          </button>
         <Link to="/forgot-password" className="text-center hover:underline">Forgot Password ?</Link>
        </form>
        <Link to="/trainer-login">
          <button className="mt-4 w-full rounded-lg p-3 text-sm border border-gray bg-white text-gray-700 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
            Login as Trainer
          </button>
        </Link>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-black font-medium hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
