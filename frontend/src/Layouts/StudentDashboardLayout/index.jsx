import { Outlet } from "react-router-dom";

const StudentDashboardLayout = () => {
  return (
    <>
      <main className="p-4">
        <Outlet /> 
      </main>
    </>
  );
};

export default StudentDashboardLayout;
