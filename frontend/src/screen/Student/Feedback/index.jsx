import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StudentFeedback = () => {
  const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/auth/student-feedback`;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    course: "",
    comment: "",
  });

  const handleFeedback = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/student-dashboard/thanks");
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  h-screen max-w-[500px] mx-auto space-y-4">
      <h1 className="text-4xl lg:text-5xl font-bold">Feedback Form</h1>
      <form
        onSubmit={handleFeedback}
        className="flex flex-col w-full space-y-4 p-6 max-w-[430px] mx-auto border border-gray rounded-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray rounded-md p-2"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray rounded-md p-2"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          className="border border-gray rounded-md p-2"
          value={formData.rating}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          className="border border-gray rounded-md p-2"
          value={formData.course}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <textarea
          name="comment"
          placeholder="comment"
          className="border border-gray rounded-md p-2"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <button className="bg-black hover:bg-gray-800 text-white px-20 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ">
          Create        
          </button>
      </form>
     
     
    </div>
  );
};

export default StudentFeedback;
