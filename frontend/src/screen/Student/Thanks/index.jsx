import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 max-w-md w-full text-center space-y-6 transition-all">
        <h1 className="text-3xl sm:text-4xl font-bold">🎉 Thank You!</h1>

        <p className="text-base sm:text-lg text-gray-300 px-2">
          We appreciate your feedback. It helps us improve and serve you better.
        </p>

        <Link
          to="/student-dashboard"
          className="inline-block px-6 py-2 text-sm sm:text-base bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition duration-300"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
