import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "./screen";
import { ForgotPassword, Signup, Login } from "./screen/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminDashboard , DetailFeedback, ViewFeedback } from "./screen/Admin";
import { StudentDashboard , Feedback, Thanks } from "./screen/Student";
import { TrainerDashboard } from "./screen/Trainer";
import { StudentDashboardLayout, ProtectedRoute, AdminDashboardLayout } from "./Layouts";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute>
                <Signup />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="view-feedback" element={<ViewFeedback />} />
            <Route path="detail-feedback/:id" element={<DetailFeedback />} />
          </Route>
          
          <Route
            path="/trainer-dashboard"
            element={
              <ProtectedRoute allowedRoles={["trainer"]}>
                <TrainerDashboard />
              </ProtectedRoute>
            }
          />
          {/* Student Dashboard */}
          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<StudentDashboard />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="thanks" element={<Thanks />} />
          </Route>


          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </div>
  );
};

export default App;
