import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  bio: {
    type: String,
  },
  profileUrl: {
    type: String,
  },
  user: {   //  relation
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});

const employeeModel = mongoose.model("Employee", employeeSchema);

export default employeeModel;