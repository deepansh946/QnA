import mongoose from "mongoose";

const schema = mongoose.Schema;

const answerSchema = new schema({
  answerId: String,
  text: {
    type: String,
    required: true,
    unique: true
  },
  timestamp: {
    type: Date,
    required: true,
    unique: true,
    default: Date.now()
  },
  authorId: {
    type: String,
    required: true
  },
  questionId: {
    type: String,
    required: true
  }
});

export default mongoose.model("Answer", answerSchema);
