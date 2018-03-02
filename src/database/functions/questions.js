import mongoose from "mongoose";

import Question from "../models/Question";

export async function create({ text, authorId }) {
  try {
    const question = new Question({
      text: text,
      authorId: authorId
    });

    const { newQuestion } = await question.save();

    return {
      statusCode: 201,
      message: "Question created",
      payload: question._id
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

export async function get({ questionId }) {
  try {
    const query = Question.findById(questionId);

    const question = await query.exec();

    if (!question) {
      return {
        statusCode: 404,
        message: "Question not found"
      };
    }

    return {
      statusCode: 200,
      message: "Question found",
      payload: question
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

export async function getAll() {
  try {
    const query = Question.find();

    const questions = await query.exec();

    return {
      statusCode: 200,
      message: "Questions found",
      payload: questions
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

export async function update({ questionId, text }) {
  try {
    const query = Question.findById(questionId);

    let question = await query.exec();

    if (text) {
      question.text = text;
    }

    const { res } = question.save();

    return {
      statusCode: 200,
      message: "Question updated successfully"
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

export async function Delete({ questionId }) {
  try {
    const query = Question.findById(questionId);

    const question = await query.exec();

    const res = await question.remove();

    return {
      statusCode: 200,
      message: "Question deleted successfully"
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}
