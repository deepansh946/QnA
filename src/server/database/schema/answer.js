import mongoose from "mongoose";

const schema = mongoose.schema;

const answerSchema = new schema({
  text: {
    type: String,
    required: true
    unique: true
  },
  timestamp: {
    type: Date,
    required: true
    unique: true  
  }
});

const answerModel = mongoose.schema('Answer', answerSchema);

export default answerModel;
