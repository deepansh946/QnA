import { create } from "../api/users";

const routes = [];

routes.push({
  method: "POST",
  path: "/users/{userId}",
  config: create
});

export default routes;
