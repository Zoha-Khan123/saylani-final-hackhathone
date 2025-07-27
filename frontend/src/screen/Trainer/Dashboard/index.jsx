import React from "react";
import { useCookies } from "react-cookie";

const TrainerDashboard = () => {
  const [cookies] = useCookies(["user"]);
  const name = cookies?.user?.user?.name;

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            👋 Welcome, {name ? name : "Trainer"}!
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Manage your sessions, view feedback, and guide students effectively.
          </p>
        </div>

        {/* Notes Section */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6 sm:p-8">
          <h3 className="text-xl font-semibold mb-4">📝 Trainer Notes</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
            <li>🗂️ Use this dashboard to monitor your training sessions.</li>
            <li>🧠 Check student feedback to improve your teaching style.</li>
            <li>📅 Plan and prepare for upcoming classes ahead of time.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
