import Joi from "joi";

import { getAllByQuestionId } from "../../database/functions/answers";

export default {
  tags: ["api", "answers"],
  description: "Display all answers of a particular question",
  notes: "It will display all answers",
  validate: {
    params: Joi.object({
      questionId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { questionId } = request.params;

      const res = await getAllByQuestionId({ questioId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
