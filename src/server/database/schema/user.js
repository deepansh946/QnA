import mongoose from "mongoose";

const schema = mongoose.schema;

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

const userModel = mongoose.model("User", userSchema);

export default userModel;
