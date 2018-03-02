import Joi from "joi";

import { update } from "../../database/functions/questions";

export default {
  tags: ["api", "questions"],
  description: "Update a question with its id",
  notes: "It will update the question",
  validate: {
    params: Joi.object({
      questionId: Joi.string().required()
    }),
    payload: Joi.object({
      text: Joi.string()
    })
  },
  async handler(request, reply) {
    try {
      const { questionId } = request.params;

      const { text } = request.payload;

      const res = await update({ questionId, text });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
