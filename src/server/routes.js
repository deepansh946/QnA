import create from "../api/users/create";
import update from "../api/users/update";
import get from "../api/users/get";
import getAll from "../api/users/getAll";
import Delete from "../api/users/delete";

const routes = [];

routes.push({
  method: "POST",
  path: "/users/{userId}",
  config: create
});

routes.push({
  method: "PUT",
  path: "/users/{userId}",
  config: update
});

routes.push({
  method: "GET",
  path: "/users/{userId}",
  config: get
});

routes.push({
  method: "GET",
  path: "/users/",
  config: getAll
});

routes.push({
  method: "DELETE",
  path: "/users/{userId}",
  config: Delete
});

export default routes;
