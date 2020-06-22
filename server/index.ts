import * as dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import Helmet from "helmet";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import categories from "./categories.json";
import posts from "./posts.json";

const mount = (app: Application) => {

    app.use(
        compression(),
        bodyParser.json(),
        cors(),
        Helmet()
    );

    app.get("/posts", (_req, res) => {
        return res.json(posts)
    });

    app.get("/categories", (_req, res) => {
        return res.json(categories)
    });

    app.listen(process.env.PORT);
    console.log(`[app]: http://localhost:${process.env.PORT}`);
    console.log(`[app]: http://localhost:${process.env.PORT}/posts`);
    console.log(`[app]: http://localhost:${process.env.PORT}/categories`);
};

mount(express());

// https://nextjs.org/docs/basic-features/typescript#api-routes