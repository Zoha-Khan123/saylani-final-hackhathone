import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { decodeToken } from "react-jwt";

const Login = () => {
  const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/auth/login`;
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
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
      console.log("fata", data);

      if (res.ok) {
        toast.success(data.message);

        // Save entire response (user + token)
        setCookie("user", data);

        // ✅ Decode token to extract role
        const decoded = decodeToken(data.token);
        const role = decoded?.role?.toLowerCase();

        setTimeout(() => {
          if (role) {
            navigate(`/${role}-dashboard`);
          } else {
            toast.error("Role missing in token");
          }
        }, 2000);
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="space-y-6 flex flex-col justify-center items-center mx-auto h-screen max-w-[300px] sm:max-w-[500px]">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Access Your Dashboard
      </h1>
      <div className="space-y-4 w-full max-w-[400px]">
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-full space-y-4 p-6 border border-gray rounded-lg shadow-sm bg-white"
        >
          <div className="space-y-1">
            <h1 className="font-semibold text-lg text-gray-800">Login</h1>
            <p className="text-sm text-darkgray">
              Kindly provide your email and password to access the trainer
              portal.
            </p>
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray rounded-md p-3 text-sm "
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray rounded-md p-3 text-sm"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />

          <button className="bg-black hover:bg-gray-800 text-white px-20 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ">
            Login
          </button>
          {/* <Link to="/forgot-password" className="text-center hover:underline">
            Forgot Password ?
          </Link> */}
        </form>

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

export default Login;
