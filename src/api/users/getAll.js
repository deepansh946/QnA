import Joi from "joi";

import { getAll } from "../../database/functions/users";

export default {
  tags: ["api", "users"],
  description: "Display all users ",
  notes: "It will display all users",
  async handler(request, reply) {
    try {
      const res = await getAll();

      return res;
    } catch (error) {
      console.error(error);

      return error;
    }
  }
};
