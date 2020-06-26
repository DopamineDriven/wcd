import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
import express, { Application, Request, Response } from "express";
import Helmet from "helmet";
import compression from "compression";
import cors from "cors";
import categories from "./categories.json";
import { connectDatabase } from "../database";
import { Post } from "../shared";
// import LRUcache from "lru-cache";

// interface LRUcacheProps {
//     value: string | number;
//     key: string;
//     req: Request;
//     res: Response;
// }

// interface renderAndCacheProps {
//     value: string | number;
//     key: string;
//     req: Request;
//     res: Response;
//     pagePath: string;
//     queryParams: object | string;
// }

// const ssrCache = new LRUcache ({
//     length: ({value, key}: LRUcacheProps) => {
//         return value.toString().length + key.toString().length
//     },
//     max: 100 * 1000 * 1000,
//     maxAge: 1000 * 30
// })

const mount = async (app: Application) => {
    const db = await connectDatabase();
    const posts: Post[] = await db.posts.find({}).toArray();
    console.log(posts);

    app.use(
        compression(),
        express.json(),
        cors(),
        Helmet()
    );

    app.get("/posts", (_req, res) => {
        return res.json(posts)
    });

    app.get("/posts/:id", (req, res) => {
        const relevantId = String(req.params.id);
        const post = posts.find(({ id }) =>  String(id) === relevantId);
        return res.json(post)
    });

    app.get("/categories", (_req, res) => {
        return res.json(categories)
    });

    app.get("/categories/:id", (req, res) => {
        const { id } = req.params;
        const foundPost = posts.filter(({ category }) => category === id);
        const categoryPosts = [...foundPost, ...foundPost, ...foundPost];
        return res.json(categoryPosts);
    });

    // app.get('*', (req, res) => {
    //     if (
    //         req.url === "/" ||
    //         req.url === "/posts" ||
    //         req.url === "/categories"
    //     ) {
        
    //     }
    // })

    app.listen(process.env.PORT);
    console.log(`[app]: http://localhost:3000`);
    console.log(`[app]: http://localhost:${process.env.PORT}/posts`);
    console.log(`[app]: http://localhost:${process.env.PORT}/categories`);
};

// async function renderAndCache({req, res, pagePath, queryParams}: renderAndCacheProps) {
//     const key = getCacheKey(req);
//     if (ssrCache.has(key)) {
//         res.setHeader("x-cache", "HIT");
//         res.send(ssrCache.get(key))
//     }
// }

mount(express());

// https://nextjs.org/docs/basic-features/typescript#api-routes