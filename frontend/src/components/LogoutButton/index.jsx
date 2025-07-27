import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("user", { path: "/" });
    navigate("/login");
    window.location.reload(); 
  };
  return (
    <div>
      <button onClick={()=>{handleLogout("user")}} className="text-sm font-medium uppercase">Logout</button>
    </div>
  )
}

export default LogoutButton