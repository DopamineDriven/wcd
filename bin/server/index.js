"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
require("ts-polyfill");
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
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
// import { connectDatabase } from "../utils";
// import { Post, Category } from "../shared";
const posts_json_1 = __importDefault(require("./posts.json"));
const categories_json_1 = __importDefault(require("./categories.json"));
const body_parser_1 = __importDefault(require("body-parser"));
// import { createServer } from "http";
// import { parse } from "url";
// import next from "next";
const PORT = parseInt(process.env.PORT, 10) || 3000;
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
const mount = (app) => __awaiter(void 0, void 0, void 0, function* () {
    // application.prepare();
    // const db = await connectDatabase();
    // const posts: Post[] = await db.posts.find({}).toArray();
    // console.log(posts);
    // const categories: Category[] = ["Technology", "Science", "People"];
    app.use(compression_1.default(), body_parser_1.default.json(), cors_1.default(), helmet_1.default());
    app.get("/posts", cors_1.default(), (_req, res) => {
        return res.json(posts_json_1.default);
    });
    app.get("/posts/:id", cors_1.default(), (req, res) => {
        const relevantId = String(req.params.id);
        const post = posts_json_1.default.find(({ id }) => String(id) === relevantId);
        return res.json(post);
    });
    app.get("/categories", (_req, res) => {
        return res.json(categories_json_1.default);
    });
    app.get("/categories/:id", (req, res) => {
        const { id } = req.params;
        const foundPost = posts_json_1.default.filter(({ category }) => category === id);
        const categoryPosts = [...foundPost, ...foundPost, ...foundPost];
        return res.json(categoryPosts);
    });
    app.get("/", (_req, res) => {
        res.json({ ping: true });
    });
    app.listen(PORT);
    console.log(`[app]: http://localhost:${PORT}`);
    console.log(`[app]: http://localhost:${PORT}/posts`);
    console.log(`[app]: http://localhost:${PORT}/categories`);
});
const myArgs = process.argv.slice(2);
console.log(`arguments: ${myArgs}`);
// if (process.argv = ["/node12/bin/node", "node12/bin/npm","run","conc:build"] && process.exit(0)) {
// 	process.exit(0)
// }
mount(express_1.default());
/*
require("dotenv").config();
import "ts-polyfill";
import express, { Application, Request, Response } from "express";
import Helmet from "helmet";
import compression from "compression";
import cors from "cors";
import http from "http";
import { connectDatabase } from "./utils";
import { Post, Category } from "../shared";
// import posts from "./posts.json";
// import categories from "./categories.json";
import bodyParser from "body-parser";
// import { createTerminus, HealthCheckError } from "@godaddy/terminus";
// import { createServer } from "http";
import { parse as parseUrl } from "url";
const PORT = parseInt(<string>process.env.PORT, 10) || 3000;
import nextapp from "./routes";
const handler = nextapp.getRequestHandler();

const mount = async (app: Application) => {
    nextapp.prepare().then(async () => {
        const db = await connectDatabase();
        const posts: Post[] = await db.posts.find({}).toArray();
        console.log(posts);
        const categories: Category[] = ["Technology", "Science", "People"];
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
    
        app.get("/", (_req: Request, res: Response) => {
            res.json({ ping: true });
        });
        app.get("/*", (req: Request, res: Response) => {
            const { pathname, query } = parseUrl(req.url, true);
            if (pathname === "category" || pathname === "post")
                nextapp.render(req, res, pathname, query);
            else {
                handler(req, res, parseUrl(req.url, true));
            }
    })
        try {
        const server = http.createServer(app);
        await nextapp.prepare();
        server.listen(PORT);
        console.log(`[app]: http://localhost:${PORT}`);
        console.log(`[app]: http://localhost:${PORT}/posts`);
        console.log(`[app]: http://localhost:${PORT}/categories`);
        console.log(`[server]: running...`);
        process.on("SIGTERM", () => {
            console.info("SIGTERM signal received");
        });

        process.on("SIGTERM", () => {
            console.log(`Process ${process.pid} received a SIGTERM signal`);
            server.close(() => {
                process.exit(0);
            });
        });

        setInterval(
            () =>
                server.getConnections((_err, connections) =>
                    console.log(`${connections} connections currently open`)
                ),
            1000
        );

        let connections: any = [];

        server.on("connection", (connection) => {
            connections.push(connection);
            connection.on(
                "close",
                () =>
                    (connections = connections.filter((curr: any) => curr !== connection))
            );
        });

        const shutDown = async () => {
            console.log("Received kill signal, shutting down gracefully");
            server.close(() => {
                console.log("Closed out remaining connections");
                process.exit(0);
            });

            setTimeout(() => {
                console.error(
                    "Could not close connections in time, forcefully shutting down"
                );
                process.exit(1);
            }, 10000);

            connections.forEach((curr: any) => curr.end());
            setTimeout(
                () => connections.forEach((curr: any) => curr.destroy()),
                5000
            );
        };

        process.on("SIGTERM", shutDown);
        process.on("SIGINT", shutDown);
    } catch (error) {
        throw new Error(`there was an error ${error}`);
    }
    process.on("SIGTERM", () => {
        console.info("SIGTERM signal received");
        });
}

    )};

mount(express());
*/
// 08:41:03.712  
// [0] [now] [mutex] process.argv is ["/node12/bin/node","/node12/bin/npm","run","serve"]
// 08:41:03.713  
// [0] [now] [mutex] process.cwd is "/vercel/791e3741"
// 08:41:03.713  
// [0] [now] [mutex] command is "run"
// 08:41:03.714  
// [1] [now] [mutex] process.argv is ["/node12/bin/node","/node12/bin/npm","run","conc:build"]
// 08:41:03.714  
// [1] [now] [mutex] process.cwd is "/vercel/791e3741"
// 08:41:03.714  
// [1] [now] [mutex] command is "run"
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
//# sourceMappingURL=index.js.map