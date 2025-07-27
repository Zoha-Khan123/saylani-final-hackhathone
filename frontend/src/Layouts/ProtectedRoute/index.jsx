import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Navbar , Footer } from "../../components";
//  This component will handle both: public and private routes
export default function ProtectedRoute({ allowedRoles = [], children }) {
  const [cookies] = useCookies(["user"]);
  const token = cookies?.user?.token;
  const role = cookies?.user?.user?.role?.toLowerCase();

  //  1. If user is NOT logged in
  if (!token) {
    //  If route is public (like login/signup/home), allow it
    if (allowedRoles.length === 0) {
      return children;
    }
    //  Otherwise redirect to login
    return <Navigate to="/login" replace />;
  }

  //  2. If user IS logged in
  if (allowedRoles.length === 0) {
    //  If route is public (like login/signup), but user is logged in → redirect to their dashboard
    return <Navigate to={`/${role}-dashboard`} replace />;
  }

  // 3. If user is logged in AND route is private AND role is allowed
  if (allowedRoles.includes(role)) {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  }

  //  4. Logged in but not allowed for this role → send to their correct dashboard
  return <Navigate to={`/${role}-dashboard`} replace />;
}
