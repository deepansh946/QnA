import Joi from "joi";

import { update } from "../../database/functions/answers";

export default {
  tags: ["api", "questions"],
  description: "Update a answer with its id",
  notes: "It will update the answer",
  validate: {
    params: Joi.object({
      answerId: Joi.string().required()
    }),
    payload: Joi.object({
      text: Joi.string()
    })
  },
  async handler(request, reply) {
    try {
      const { answerId } = request.params;

      const { text } = request.payload;

      const res = await update({ answerId, text });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
