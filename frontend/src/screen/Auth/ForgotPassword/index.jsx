import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen max-w-[500px] mx-auto px-4">
      <div className="space-y-6 w-full max-w-[400px]">
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Forgot Password
        </h1>

        <form className="flex flex-col w-full space-y-4 p-6 border border-gray rounded-lg shadow-sm bg-white">
          <div className="space-y-1">
            <h1 className="font-semibold text-lg text-gray-800">
              Forgot Password
            </h1>
            <p className="text-sm text-darkgray">
              Enter your email and we’ll send you a link to reset your password.
            </p>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="border border-gray rounded-md p-2"
          />

          <button className="bg-black hover:bg-gray-800 text-white px-20 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ">
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Back to{" "}
          <Link
            to="/login"
            className="text-black font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
