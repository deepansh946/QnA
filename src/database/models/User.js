import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  UserId: String,
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model("User", userSchema);
