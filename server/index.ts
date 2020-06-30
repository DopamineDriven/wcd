import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import Helmet from "helmet";
import compression from "compression";
import cors from "cors";
// import categories from "./categories.json";
import { connectDatabase } from "../database";
import next from "next";
import { Post, Category } from "../shared";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
	try {
		await app.prepare();
		const server = express();
		const db = await connectDatabase();
		const posts: Post[] = await db.posts.find({}).toArray();
		const categories: Category[] = ["Technology", "Science", "People"];

		server.use(compression(), express.json(), cors(), Helmet());

		server.all("*", (req: Request, res: Response) => {
			return handle(req, res);
		});

		server.get("/posts", (_req: Request, res: Response) => {
			return res.json(posts);
		});

		server.get("/posts/:id", (req: Request, res: Response) => {
			const relevantId = String(req.params.id);
			const post = posts.find(({ id }) => String(id) === relevantId);
			return res.json(post);
		});

		server.get("/categories", (_req: Request, res: Response) => {
			return res.json(categories);
		});

		server.get("/categories/:id", (req: Request, res: Response) => {
			const { id } = req.params;
			const foundPost = posts.filter(({ category }) => category === id);
			const categoryPosts = [...foundPost, ...foundPost, ...foundPost];
			return res.json(categoryPosts);
		});

		server.listen(process.env.PORT, (err?: any) => {
			if (err) throw err;
			console.log(`[app]: http://localhost:3000`);
			console.log(`[app]: http://localhost:${process.env.PORT}/posts`);
			console.log(`[app]: http://localhost:${process.env.PORT}/categories`);
		});
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
})();

// const mount = async (app: Application ) => {
// 	const db = await connectDatabase();
// 	const posts: Post[] = await db.posts.find({}).toArray();
//     console.log(posts);
//     const categories: Category[] = ["Technology", "Science", "People"];

// 	app.use(compression(), express.json(), cors(), Helmet());

// 	app.get("/posts", cors(), (_req, res) => {
// 		return res.json(posts);
// 	});

// 	app.get("/posts/:id", cors(), (req, res) => {
// 		const relevantId = String(req.params.id);
// 		const post = posts.find(({ id }) => String(id) === relevantId);
// 		return res.json(post);
// 	});

// 	app.get("/categories", (_req, res) => {
// 		return res.json(categories);
// 	});

// 	app.get("/categories/:id", (req, res) => {
// 		const { id } = req.params;
// 		const foundPost = posts.filter(({ category }) => category === id);
// 		const categoryPosts = [...foundPost, ...foundPost, ...foundPost];
// 		return res.json(categoryPosts);
// 	});

// 	app.listen(process.env.PORT);
// 	console.log(`[app]: http://localhost:3000`);
// 	console.log(`[app]: http://localhost:${process.env.PORT}/posts`);
// 	console.log(`[app]: http://localhost:${process.env.PORT}/categories`);
// };

// mount(express());

// https://nextjs.org/docs/basic-features/typescript#api-routes

// import { parse, parseAndGenerateServices } from "@typescript-eslint/typescript-estree";

// const code = `string of code to be parsed into an AST`;
// // parses code with options provided, returns ESTree-compatible AST
// const ast = parse(code, {
// 	loc: true,
// 	range: true
// });

// // accepts additional options relative to parse
// // can generate an AST containing type information
// const ast2 = parseAndGenerateServices(code, {
//     filePath: '/some/path',
//     loc: true,
//     project: '../tsconfig.json',
//     range: true
// });

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

// app.get('*', (req, res) => {
//     if (
//         req.url === "/" ||
//         req.url === "/posts" ||
//         req.url === "/categories"
//     ) {

//     }
// })

// async function renderAndCache({req, res, pagePath, queryParams}: renderAndCacheProps) {
//     const key = getCacheKey(req);
//     if (ssrCache.has(key)) {
//         res.setHeader("x-cache", "HIT");
//         res.send(ssrCache.get(key))
//     }
// }
