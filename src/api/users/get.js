import Joi from "joi";

import { get } from "../../database/functions/users";

export default {
  tags: ["api", "users"],
  description: "Display a user with the help of its id",
  notes: "It will display a user with its id",
  validate: {
    params: Joi.object({
      userId: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { userId } = request.params;

      const res = await get({ userId });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
