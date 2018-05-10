import Joi from "joi";

import { create } from "../../database/functions/users";

export default {
  tags: ["api", "users"],
  description: "Create a new user",
  notes: "It will create a new user",
  validate: {
    payload: Joi.object({
      fullName: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required()
    })
  },
  async handler(request, reply) {
    try {
      const { fullName, email, password } = request.payload;

      const res = await create({
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
