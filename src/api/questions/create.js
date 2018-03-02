import Joi from "joi";

import { create } from "../../database/functions/questions";

export default {
  tags: ["api", "questions"],
  description: "Create a new question",
  notes: "It will create a new question",
  validate: {
    params: Joi.object({
      questionId: Joi.string().required()
    }),
    payload: Joi.object({
      text: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { questionId } = request.params;
      const { text } = request.payload;

      const res = await create({ questionId, text });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
