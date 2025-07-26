import mongoose from "mongoose";

const AuthSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    cnic: {
      type: String,
      required: [true, "Please enter CNIC"],
      validate: {
        validator: function (v) {
          return /^\d{11}$/.test(v);
        },
        message: "CNIC must be exactly 11 digits",
      },
    },
    role: {
    type: String,
    enum: ["none", "student", "admin", "trainer"],
    default: "none",
  },
  },
  {
    timestamps: true,
  }
);

const AuthUser = mongoose.model("Auth-Users", AuthSchema);
export default AuthUser;
