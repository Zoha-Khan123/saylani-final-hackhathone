import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DetailFeedback = () => {
   const {id} =  useParams()
  const [users, setUsers] = useState([]);
  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  //  Fetch all users on load
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${baseUrl}/auth/one-feedback/${id}`);
        console.log();
        
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
   <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-black px-4 py-10">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Feedback Details</h2>

        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">Name:</span> {users.name}</p>
          <p><span className="font-semibold">Email:</span> {users.email}</p>
          <p><span className="font-semibold">Course:</span> {users.course}</p>
          <p><span className="font-semibold">Rating:</span> {users.rating} / 10</p>
          <p><span className="font-semibold">Comment:</span> {users.comment}</p>
        </div>
      </div>
    </div>
  )
};

export default DetailFeedback;
