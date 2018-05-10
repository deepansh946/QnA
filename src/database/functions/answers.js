import mongoose from "mongoose";

import Answer from "../models/Answer";

export async function create({ text, authorId, questionId }) {
  try {
    const answer = new Answer({
      text: text,
      authorId: authorId,
      questionId: questionId
    });

    const { newAnswer } = await answer.save();

    return {
      statusCode: 201,
      message: "Answer created",
      payload: answer._id
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

// create({
//   text: 'First answer', 
//   authorId: "12312312", 
//   questionId: "5a99587abcacb7692b1230d4"
// })
//   .then(e => console.log(e))
//   .catch(e => console.log(e));

export async function getAllByQuestionId({ questionId }) {
  try {
    const query = Answer.find({ 'questionId': questionId });

    const answers = await query.exec();

    return {
      statusCode: 200,
      message: "Answers found",
      payload: answers
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

// getAllByQuestionId({questionId: "5a99587abcacb7692b1230d4"})
//   .then(e => console.log(e))
//   .catch(e => console.log(e));

export async function getAllByAuthorId({ authorId }) {
  try {
    const query = Answer.find({ 'authorId': authorId });

    const answers = await query.exec();

    return {
      statusCode: 200,
      message: "Answers found",
      payload: answers
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

// getAllByAuthorId({authorId: "12312312"})
//   .then(e => console.log(e))
//   .catch(e => console.log(e));

export async function update({ answerId, text }) {
  try {
    const query = Answer.findById(answerId);

    let answer = await query.exec();

    if (text) {
      answer.text = text;
    }

    const { res } = answer.save();

    return {
      statusCode: 200,
      message: "Answer updated successfully"
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

export async function Delete({ answerId }) {
  try {
    const query = Answer.findById(answerId);

    const answer = await query.exec();

    const res = await answer.remove();

    return {
      statusCode: 200,
      message: "Answer deleted successfully"
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}
