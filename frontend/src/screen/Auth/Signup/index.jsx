import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/auth/signup`;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cnic: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  h-screen max-w-[300px] sm:max-w-[500px] mx-auto space-y-4">
      <h1 className="text-4xl lg:text-5xl font-bold">Create Account</h1>
      <form
        onSubmit={handleSignup}
        className="flex flex-col w-full space-y-4 p-6 max-w-[430px] mx-auto border border-gray rounded-lg"
      >
        <div className="space-y-1">
          <h1 className="font-semibold text-lg text-gray-800">Sign Up</h1>
          <p className="text-sm text-darkgray">
            Please fill in your details to create a new account
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray rounded-md p-2"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray rounded-md p-2"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray rounded-md p-2"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="border border-gray rounded-md p-2"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          type="number"
          name="cnic"
          placeholder="CNIC"
          className="border border-gray rounded-md p-2"
          value={formData.cnic}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <button className="bg-black hover:bg-gray-800 text-white px-20 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ">
          Sign Up
        </button>
      </form>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-black font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
