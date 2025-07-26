import express from "express";
import { signup , allUsers, updateRole , login, deleteUser } from "../controllers/auth.controller.js";
import { studentFeedback , getAllFeedbacks ,getOneFeedback } from "../controllers/student.feedback.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.get("/users", allUsers);
router.put("/update-role", updateRole);
router.post("/login", login);
router.delete("/delete/:id", deleteUser);
router.post("/student-feedback", studentFeedback);
router.get("/all-feedback", getAllFeedbacks);
router.get("/one-feedback/:id", getOneFeedback);

export default router;