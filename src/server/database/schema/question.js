import mongoose from "mongoose";

const schema = mongoose.schema;

const questionSchema = new schema({
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

const questionModel = mongoose.schema('Question', answerSchema);

export default questionModel;
