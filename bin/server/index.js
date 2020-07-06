"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("ts-polyfill");
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
var http_1 = __importDefault(require("http"));
var utils_1 = require("./utils");
// import posts from "./posts.json";
// import categories from "./categories.json";
var body_parser_1 = __importDefault(require("body-parser"));
// import { createTerminus, HealthCheckError } from "@godaddy/terminus";
// import { createServer } from "http";
var url_1 = require("url");
var PORT = parseInt(process.env.PORT, 10) || 3000;
var routes_1 = __importDefault(require("./routes"));
var handler = routes_1.default.getRequestHandler();
var mount = function (app) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        routes_1.default.prepare().then(function () { return __awaiter(void 0, void 0, void 0, function () {
            var db, posts, categories, server_1, connections_1, shutDown, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.connectDatabase()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.posts.find({}).toArray()];
                    case 2:
                        posts = _a.sent();
                        console.log(posts);
                        categories = ["Technology", "Science", "People"];
                        app.use(compression_1.default(), body_parser_1.default.json(), cors_1.default(), helmet_1.default());
                        app.get("/posts", cors_1.default(), function (_req, res) {
                            return res.json(posts);
                        });
                        app.get("/posts/:id", cors_1.default(), function (req, res) {
                            var relevantId = String(req.params.id);
                            var post = posts.find(function (_a) {
                                var id = _a.id;
                                return String(id) === relevantId;
                            });
                            return res.json(post);
                        });
                        app.get("/categories", function (_req, res) {
                            return res.json(categories);
                        });
                        app.get("/categories/:id", function (req, res) {
                            var id = req.params.id;
                            var foundPost = posts.filter(function (_a) {
                                var category = _a.category;
                                return category === id;
                            });
                            var categoryPosts = __spreadArrays(foundPost, foundPost, foundPost);
                            return res.json(categoryPosts);
                        });
                        app.get("/", function (_req, res) {
                            res.json({ ping: true });
                        });
                        app.get("/*", function (req, res) {
                            var _a = url_1.parse(req.url, true), pathname = _a.pathname, query = _a.query;
                            if (pathname === "category" || pathname === "post")
                                routes_1.default.render(req, res, pathname, query);
                            else {
                                handler(req, res, url_1.parse(req.url, true));
                            }
                        });
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        server_1 = http_1.default.createServer(app);
                        return [4 /*yield*/, routes_1.default.prepare()];
                    case 4:
                        _a.sent();
                        server_1.listen(PORT);
                        console.log("[app]: http://localhost:" + PORT);
                        console.log("[app]: http://localhost:" + PORT + "/posts");
                        console.log("[app]: http://localhost:" + PORT + "/categories");
                        console.log("[server]: running...");
                        process.on("SIGTERM", function () {
                            console.info("SIGTERM signal received");
                        });
                        process.on("SIGTERM", function () {
                            console.log("Process " + process.pid + " received a SIGTERM signal");
                            server_1.close(function () {
                                process.exit(0);
                            });
                        });
                        setInterval(function () {
                            return server_1.getConnections(function (_err, connections) {
                                return console.log(connections + " connections currently open");
                            });
                        }, 1000);
                        connections_1 = [];
                        server_1.on("connection", function (connection) {
                            connections_1.push(connection);
                            connection.on("close", function () {
                                return (connections_1 = connections_1.filter(function (curr) { return curr !== connection; }));
                            });
                        });
                        shutDown = function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                console.log("Received kill signal, shutting down gracefully");
                                server_1.close(function () {
                                    console.log("Closed out remaining connections");
                                    process.exit(0);
                                });
                                setTimeout(function () {
                                    console.error("Could not close connections in time, forcefully shutting down");
                                    process.exit(1);
                                }, 10000);
                                connections_1.forEach(function (curr) { return curr.end(); });
                                setTimeout(function () { return connections_1.forEach(function (curr) { return curr.destroy(); }); }, 5000);
                                return [2 /*return*/];
                            });
                        }); };
                        process.on("SIGTERM", shutDown);
                        process.on("SIGINT", shutDown);
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        throw new Error("there was an error " + error_1);
                    case 6:
                        process.on("SIGTERM", function () {
                            console.info("SIGTERM signal received");
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
mount(express_1.default());
// const myArgs = process.argv.slice(2);
// console.log(`arguments: ${myArgs}`);
// if (process.argv = ["/node12/bin/node", "node12/bin/npm","run","conc:build"] && process.exit(0)) {
// 	process.exit(0)
// }
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