import React from "react";
import { useCookies } from "react-cookie";

const StudentDashboard = () => {
  const [cookies] = useCookies(["user"]);
  const name = cookies?.user?.user?.name;

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            🎓 Welcome, {name ? name : "Student"}!
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Here’s a quick overview of your learning journey.
          </p>
        </div>


        {/* Tips / Reminders Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-inner p-6">
          <h3 className="text-xl font-semibold mb-3">📌 Reminders</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
            <li>Submit feedback after attending sessions.</li>
            <li>Join your upcoming classes on time.</li>
            <li>Keep checking this dashboard for updates.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
