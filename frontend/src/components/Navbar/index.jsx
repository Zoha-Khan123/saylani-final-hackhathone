import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import LogoutButton from "../LogoutButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [cookies] = useCookies(["user"]);
  const role = cookies?.user?.user?.role?.toLowerCase();

 const menuItems = () => {
  let links = [];

  if (role === "student") {
    links = [
      <li key="dashboard"><Link to="/student-dashboard" className="hover:text-gray-400 transition">Dashboard</Link></li>,
      <li key="feedback"><Link to="/student-dashboard/feedback" className="hover:text-gray-400 transition">Feedback</Link></li>,
    ];
  }

  if (role === "admin") {
    links = [
      <li key="dashboard"><Link to="/admin-dashboard" className="hover:text-gray-400 transition">Dashboard</Link></li>,
      <li key="users"><Link to="/admin-dashboard/view-feedback" className="hover:text-gray-400 transition">View Feedback</Link></li>,
    ];
  }

  // ✅ Add LogoutButton to all roles
  links.push(
    <li key="logout">
      <LogoutButton />
    </li>
  );

  return links;
};

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Role-Based App</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase">
          {menuItems()}
        </ul>

        {/* Mobile Toggle Icons */}
        <div className="md:hidden z-50">
          {toggle ? (
            <IoMdClose
              size={24}
              className="cursor-pointer"
              onClick={() => setToggle(false)}
            />
          ) : (
            <FaBars
              size={22}
              className="cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-black text-white flex flex-col items-center justify-center gap-10 text-lg font-semibold transform transition-transform duration-300 ease-in-out ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {menuItems()}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
