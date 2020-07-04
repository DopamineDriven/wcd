import * as dotenv from "dotenv";
dotenv.config();
import 'ts-polyfill';
// import 'ts-polyfill/lib/es2015';
// import 'ts-polyfill/lib/es2016-array-include';
// import 'ts-polyfill/lib/es2017-string';
// import 'ts-polyfill/lib/es2017-object';
// import 'ts-polyfill/lib/es2017-typed-arrays';
// import 'ts-polyfill/lib/es2018-async-iterable';
// import 'ts-polyfill/lib/es2018-promise';
// import 'ts-polyfill/lib/es2019-array';
// import 'ts-polyfill/lib/es2019-object';
// import 'ts-polyfill/lib/es2019-string';
// import 'ts-polyfill/lib/es2019-symbol';
// import 'ts-polyfill/lib/es2020-global-this';
// import 'ts-polyfill/lib/es2020-promise';
// import 'ts-polyfill/lib/es2020-string';
// import 'ts-polyfill/lib/es2020-symbol-wellknown';
import express, { Application, Request, Response } from "express";
import Helmet from "helmet";
import compression from "compression";
import cors from "cors";
// import { connectDatabase } from "../utils";
// import { Post, Category } from "../shared";
import posts from "./posts.json";
import categories from "./categories.json";
import bodyParser from "body-parser";
// import { createServer } from "http";
// import { parse } from "url";
// import next from "next";
const PORT = parseInt(<string>process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
// 	const server = express();
// 	server.use(bodyParser.json())

// 	server.get('/posts', (req: Request, res: Response) => {
// 		return app.render(req, res, '/posts', res.json(posts))
// 	})

// })


const mount = async (app: Application) => {
	// application.prepare();
	// const db = await connectDatabase();
	// const posts: Post[] = await db.posts.find({}).toArray();
	// console.log(posts);
	// const categories: Category[] = ["Technology", "Science", "People"];

	app.use(compression(), bodyParser.json(), cors(), Helmet());

	app.get("/posts", cors(), (_req: Request, res: Response) => {
		return res.json(posts);
	});

	app.get("/posts/:id", cors(), (req: Request, res: Response) => {
		const relevantId = String(req.params.id);
		const post = posts.find(({ id }) => String(id) === relevantId);
		return res.json(post);
	});

	app.get("/categories", (_req: Request, res: Response) => {
		return res.json(categories);
	});

	app.get("/categories/:id", (req: Request, res: Response) => {
		const { id } = req.params;
		const foundPost = posts.filter(({ category }) => category === id);
		const categoryPosts = [...foundPost, ...foundPost, ...foundPost];
		return res.json(categoryPosts);
	});
	
	app.listen(PORT);
	console.log(`[app]: http://localhost:${PORT}`);
	console.log(`[app]: http://localhost:${PORT}/posts`);
	console.log(`[app]: http://localhost:${PORT}/categories`);
};

mount(express());


// import log from "../utils/cjs/";
// const net = require("net");
// import routes from "./routes";
// import next from "next";
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handler = routes.getRequestHandler(app);

// function createServer () {
// 	const server = net.createServer()
// 	setInterval(() => {}, 1000)
// 	server.listen(0)
// }

// createServer()

// setTime(function () {
// 	log
// }, 10000)
// import * as dotenv from "dotenv";
// dotenv.config();
// import routes from "./routes";
// import next from "next";
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handler = routes.getRequestHandler(app);
// const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

// const mount = async () => {
// 	const db = await connectDatabase();
// 	const posts: Post[] = await db.posts.find({}).toArray();
// 	console.log(posts);
// 	app.prepare().then(() => {
// 		const categories: Category[] = ["Technology", "Science", "People"];
// 		const server = express();

// 		server.use(compression(), express.json(), cors(), Helmet());

// 		server.all("*", (req: Request, res: Response) => {
// 			return handler(req, res)
// 		});

// 		server.get("/posts", cors(), (_req: Request, res: Response) => {
// 			return res.json(posts);
// 		});

// 		server.get("/posts/:id", cors(), (req: Request, res: Response) => {
// 			const relevantId = String(req.params.id);
// 			const post = posts.find(({ id }) => String(id) === relevantId);
// 			return res.json(post);
// 		});

// 		server.get("/categories", (_req: Request, res: Response) => {
// 			return res.json(categories);
// 		});

// 		server.get("/categories/:id", (req: Request, res: Response) => {
// 			const { id } = req.params;
// 			const foundPost = posts.filter(({ category }) => category === id);
// 			const categoryPosts = [...foundPost, ...foundPost, ...foundPost];
// 			return res.json(categoryPosts);
// 		});

// 		server.listen(PORT);
// 		console.log(`[app]: http://localhost:3000`);
// 		console.log(`[app]: http://localhost:${process.env.PORT}/posts`);
// 		console.log(`[app]: http://localhost:${process.env.PORT}/categories`);
// 	})
// };

// mount();

// import * as dotenv from "dotenv";
// dotenv.config();
// // import { createServer } from "http";
// // import { parse } from "url";
// import express, { Application, Request, Response } from "express";
// import Helmet from "helmet";
// import compression from "compression";
// import cors from "cors";
// import { connectDatabase } from "../utils";
// import { Post, Category } from "../shared";
// import routes from "./routes";
// import next from "next";
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handler = routes.getRequestHandler(app);
// const PORT = parseInt(<string>process.env.PORT || "3000", 10);

// const mount = async (app: Application) => {
// 	// application.prepare();
// 	const db = await connectDatabase();
// 	const posts: Post[] = await db.posts.find({}).toArray();
// 	console.log(posts);
// 	const categories: Category[] = ["Technology", "Science", "People"];

// 	app.use(compression(), express.json(), cors(), Helmet());

// 	app.get("/posts", cors(), (_req: Request, res: Response) => {
// 		return res.json(posts);
// 	});

// 	app.get("/posts/:id", cors(), (req: Request, res: Response) => {
// 		const relevantId = String(req.params.id);
// 		const post = posts.find(({ id }) => String(id) === relevantId);
// 		return res.json(post);
// 	});

// 	app.get("/categories", (_req: Request, res: Response) => {
// 		return res.json(categories);
// 	});

// 	app.get("/categories/:id", (req: Request, res: Response) => {
// 		const { id } = req.params;
// 		const foundPost = posts.filter(({ category }) => category === id);
// 		const categoryPosts = [...foundPost, ...foundPost, ...foundPost];
// 		return res.json(categoryPosts);
// 	});

// 	app.listen(PORT);
// 	console.log(`[app]: http://localhost:3000`);
// 	console.log(`[app]: http://localhost:${PORT}/posts`);
// 	console.log(`[app]: http://localhost:${PORT}/categories`);
// };

// app.prepare().then(() =>
// 	mount(
// 		express().get("*", (req: Request, res: Response) => {
// 			return handler(req, res);
// 		})
// 	)
// );
