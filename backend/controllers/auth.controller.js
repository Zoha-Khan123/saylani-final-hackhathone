import AuthUser from "../models/auth.model.js";
import { hashMyPassword, comparePassword } from "../utils/hashPassword.js";
import { sendRoleAssignedEmail } from "../utils/sendEmail.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose"
dotenv.config();

// ================= Signup ==================
export const signup = async (req, res) => {
  const { name, email, password, confirmPassword, cnic } = req.body;

  if (!name || !email || !password || !confirmPassword || !cnic) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Password does not match" });
  }

  if (password && password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password should be atleast 6 characters long" });
  }

  if (cnic.length !== 11) {
    return res.status(400).json({ message: "CNIC must be 11 digits" });
  }

  const duplicateEmail = await AuthUser.findOne({ email });
  if (duplicateEmail) {
    return res.status(500).json({ message: "User already exists" });
  }

  const hashPassword = await hashMyPassword(password);

  try {
    const addUser = await AuthUser.create({
      name,
      email,
      password: hashPassword,
      confirmPassword,
      cnic,
    });
    res.status(200).json({ message: "Signup Successfull", addUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= Get All Users ==================
export const allUsers = async (req, res) => {
  try {
    const users = await AuthUser.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= Update Role ==================
export const updateRole = async (req, res) => {
  const { userId, role } = req.body;
  console.log("id", userId);
  console.log("role", role);

  try {
    const user = await AuthUser.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = role;
    await user.save();

    // Send email after successful role assignment
    await sendRoleAssignedEmail(user.email, user.name, role);

    res.status(200).json({ message: "Role updated and email sent", user });
  } catch (error) {
    console.error("Role Update Error:", error);
    res.status(500).json({ message: "Error updating role" });
  }
};

// ================= Login ==================
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields" });
  }
  //  Email
  const user = await AuthUser.findOne({ email });
  console.log(user);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  // Password
  const match = await comparePassword(password, user.password);
  if (!match) {
    return res.status(400).json({ message: "Password does not match" });
  }

  // Check Role Assigned
  if (!user.role || user.role === "none") {
    return res
      .status(403)
      .json({ message: "No role yet. You'll get an email when assigned." });
  }

  // Role is assigned, create token
  const { _id, name, email: UserEmail, role } = user;

  const token = jwt.sign(
    { _id, name, email: UserEmail, role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );
  res
    .status(200)
    .json({
      message: "Login succeessfully",
      token,
      user: { _id, name, email: UserEmail, role },
    });
};

// ================= Delete User ==================
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("delteId", id);
    // ✅ Check if ObjectId format is valid
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }
    const user = await AuthUser.findByIdAndDelete(id);
    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }
    res.status(200).json({message:"User deleted successfully", user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
