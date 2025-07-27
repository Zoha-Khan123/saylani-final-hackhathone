import StudentFeedbackModel from "../models/student.feedback.model.js"

// ==================== Student Feedback =======================
export const studentFeedback = async (req,res) => {
  const {name , email , rating , course , comment} = req.body
    try {
      if (!name || !email || !rating || !course || !comment) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }
        const studentFeedback = await StudentFeedbackModel.create(req.body)
        return res.status(200).json({studentFeedback , message:"feedback added"});
    } catch (error) {
        console.log(error);
        
        res.status(500).json({message:error.message})
    }
}


// ======================== Get All Feedbacks ======================
export const getAllFeedbacks = async (req,res) => {
    try {
        const studentFeedback = await StudentFeedbackModel.find()
        res.status(200).json(studentFeedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ===================== Get One User =======================
export const getOneFeedback = async (req,res) => {
    try {
        const {id} = req.params
        const oneStudentFeedback = await StudentFeedbackModel.findById(id)
        res.status(200).json(oneStudentFeedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



