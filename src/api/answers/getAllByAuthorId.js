import Joi from "joi";

import { getAllByAuthorId } from "../../database/functions/answers";

export default {
  tags: ["api", "answers"],
  description: "Display all answers by a particular author",
  notes: "It will display all answers",
  validate: {
    params: Joi.object({
      authorId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { authorId } = request.params;

      const res = await getAllByAuthorId({ authorId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
