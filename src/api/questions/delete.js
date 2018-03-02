import Joi from "joi";

import { Delete } from "../../database/functions/questions";

export default {
  tags: ["api", "questions"],
  description: "Delete a question",
  notes: "It will delete a question",
  validate: {
    params: Joi.object({
      questionId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { questionId } = request.params;

      const res = await Delete({ questionId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
