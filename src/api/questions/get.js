import Joi from "joi";

import { get } from "../../database/functions/questions";

export default {
  tags: ["api", "questions"],
  description: "Get a question with its id",
  notes: "It will display a question",
  validate: {
    params: Joi.object({
      questionId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { questionId } = request.params;

      const res = await get({ questionId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
