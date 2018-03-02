import Joi from "joi";

import { create } from "../../database/functions/users";

export default {
  tags: ["api", "users"],
  description: "Create a new user",
  notes: "It will create a new user",
  validate: {
    params: Joi.object({
      userId: Joi.string().required()
    }),
    payload: Joi.object({
      fullName: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { userId } = request.params;
      const { fullName, email, password } = request.payload;

      const res = await create({
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
