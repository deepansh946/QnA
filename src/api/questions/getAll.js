import Joi from "joi";

import { getAll } from "../../database/functions/questions";

export default {
  tags: ["api", "questions"],
  description: "Display all questions",
  notes: "It will display all questions",
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
