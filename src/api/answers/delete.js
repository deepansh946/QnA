import Joi from "joi";

import { Delete } from "../../database/functions/answers";

export default {
  tags: ["api", "answers"],
  description: "Delete a answer",
  notes: "It will delete a answer",
  validate: {
    params: Joi.object({
      answerId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { answerId } = request.params;

      const res = await Delete({ answerId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
