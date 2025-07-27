import React , {useEffect , useState} from 'react'
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const ViewFeedback = () => {
    const [users, setUsers] = useState([]);
      const baseUrl = import.meta.env.VITE_BACKEND_URL;
    
      //  Fetch all users on load
      useEffect(() => {
        const fetchUsers = async () => {
          try {
            const res = await fetch(`${baseUrl}/auth/all-feedback`);
            const data = await res.json();
            console.log(data);
            
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



  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black px-4 py-10">
      <h1 className="text-3xl font-bold text-white text-center mb-8">All Student Feedback</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-xl shadow-lg p-6 space-y-3 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-600"><span className="font-semibold">Email:</span> {user.email}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Course:</span> {user.course}</p>

            <Link
              to={`/admin-dashboard/detail-feedback/${user._id}`}
              className="inline-block mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              View Student
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewFeedback