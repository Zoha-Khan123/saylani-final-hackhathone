import mongoose from "mongoose";

const StudentFeedbackSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    course: {
      type: String,
      required: [true, "Please enter course"],
    },
    rating: {
      type: Number,
      required: [true, "Please enter rating"],
      min: [1, "Rating must be at least 1"],
      max: [10, "Rating cannot be more than 10"],
    },
    comment: {
      type: String,
      required: [true, "Please enter comment"],
    },
  },
  {
    timestamps: true,
  }
);

const StudentFeedbackModel = mongoose.model("Student-Feedback", StudentFeedbackSchema);
export default StudentFeedbackModel;
