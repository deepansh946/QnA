import createUser from "../api/users/create";
import updateUser from "../api/users/update";
import getUser from "../api/users/get";
import getAllUser from "../api/users/getAll";
import DeleteUser from "../api/users/delete";

import createQuestion from "../api/questions/create";
import updateQuestion from "../api/questions/update";
import getQuestion from "../api/questions/get";
import getAllQuestion from "../api/questions/getAll";
import DeleteQuestion from "../api/questions/delete";

const routes = [];

/**
 * Routes of users
 */
routes.push({
  method: "POST",
  path: "/users/{userId}",
  config: createUser
});

routes.push({
  method: "PUT",
  path: "/users/{userId}",
  config: updateUser
});

routes.push({
  method: "GET",
  path: "/users/{userId}",
  config: getUser
});

routes.push({
  method: "GET",
  path: "/users/",
  config: getAllUser
});

routes.push({
  method: "DELETE",
  path: "/users/{userId}",
  config: DeleteUser
});

/**
 * Routes of questions
 */
routes.push({
  method: "POST",
  path: "/questions/{questionId}",
  config: createQuestion
});

routes.push({
  method: "PUT",
  path: "/questions/{questionId}",
  config: updateQuestion
});

routes.push({
  method: "GET",
  path: "/questions/{questionId}",
  config: getQuestion
});

routes.push({
  method: "GET",
  path: "/questions/",
  config: getAllQuestion
});

routes.push({
  method: "DELETE",
  path: "/questions/{questionId}",
  config: DeleteQuestion
});

export default routes;
