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
    unique: true
  }
});

export default mongoose.model("Answer", answerSchema);
