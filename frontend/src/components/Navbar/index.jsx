import React from 'react'
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookie , removeCookie] = useCookies(["user"]);
  return (
    <div>
      <button onClick={()=>{removeCookie("user")}}>Logout</button>
    </div>
  )
}

export default Navbar