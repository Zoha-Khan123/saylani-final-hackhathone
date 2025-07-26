import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  //  Fetch all users on load
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${baseUrl}/auth/users`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data);
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        toast.error("Failed to fetch users");
      }
    };
    fetchUsers();
  }, [baseUrl]);

  //  Available roles
  const roles = ["none", "student", "admin", "trainer"];

  //  Role change handler
  const handleRoleChange = async (userId, newRole) => {
    try {
      const res = await fetch(`${baseUrl}/auth/update-role`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, role: newRole }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);

        //  Update user list in UI without full reload
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, role: newRole } : user
          )
        );
      } else {
        toast.error(data.message || "Failed to update role");
      }
    } catch (err) {
      toast.error("Server error during role update");
    }
  };


  // Delete User
  const handleDeleteUser = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/auth/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id}),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        // Remove deleted user from UI
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== id)
        );
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Server error during user delete");
    }
  };


  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-center">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option disabled value="">
                    Select role
                  </option>
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
