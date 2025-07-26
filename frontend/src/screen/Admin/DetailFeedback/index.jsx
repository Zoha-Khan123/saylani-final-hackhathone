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
    <div>
   {users.name}
    </div>
  )
};

export default DetailFeedback;
