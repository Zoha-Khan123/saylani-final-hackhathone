import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-[600px] mx-auto h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="text-4xl lg:text-5xl font-bold">Welcome Back</h1>
      <p className="text-center">
        To maintain your connection with us and access personalized information,
        please login using your account credentials.
      </p>
      <Link to="/login">
        <button className="bg-black hover:bg-gray-800 text-white px-20 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Home;
