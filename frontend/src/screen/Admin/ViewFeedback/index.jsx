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
    <div>
        {
            users.map((user)=>{
                return(

                <div key={user._id}>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.course}</p>
                <Link to={`/admin-dashboard/detail-feedback/${user._id}`}>View Student</Link>
                </div>
                )
            })
        }
    </div>
  )
}

export default ViewFeedback