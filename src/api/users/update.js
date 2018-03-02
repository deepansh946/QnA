import Joi from "joi";

import { update } from "../../database/functions/users";

export default {
  tags: ["api", "users"],
  description: "Update the information of the user",
  notes: "It will update the user",
  validate: {
    params: Joi.object({
      userId: Joi.string().required()
    }),
    payload: Joi.object({
      fullName: Joi.string(),
      email: Joi.string(),
      password: Joi.string()
    })
  },
  async handler(request, reply) {
    try {
      const { userId } = request.params;
      const { fullName, email, password } = request.payload;

      const res = await update({
        userId,
        fullName,
        email,
        password
      });

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
