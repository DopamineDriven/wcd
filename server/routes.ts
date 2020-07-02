import nextRoutes from "next-routes";

const routes = new nextRoutes();

routes.add("/", "/categories" && "/categories/:id", "/posts" && "/posts/:id");

export default routes;
