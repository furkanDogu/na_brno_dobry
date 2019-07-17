// @ts-ignore
const routes = require("next-routes");

// @ts-ignore
module.exports = routes()
  .add({ page: "/login/graphql", pattern: "/login" })
  .add({ page: "/products", pattern: "/" })
  .add({ page: "/changePassword", pattern: "/changePassword" });
