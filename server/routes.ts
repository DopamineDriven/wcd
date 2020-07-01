import nextRoutes from "next-routes";

const routes = new nextRoutes();

routes.add("/", "category", "post");

export default routes;
