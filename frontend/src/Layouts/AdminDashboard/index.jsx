import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  return (
    <>
      <main className="p-4">
        <Outlet /> 
      </main>
    </>
  );
};

export default AdminDashboardLayout;
