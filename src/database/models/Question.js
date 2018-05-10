import mongoose from "mongoose";

const schema = mongoose.Schema;

const questionSchema = new schema({
  questionId: String,
  text: {
    type: String,
    required: true,
    unique: true
  },
  timestamp: {
    type: Date,
    required: true,
    unique: true,
    default: Date.now
  },
  authorId: {
    type: String,
    required: true
  }
});

export default mongoose.model("Question", questionSchema);
