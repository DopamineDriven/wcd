"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_1 = __importDefault(require("next"));
var dev = process.env.NODE_ENV !== 'production';
var nextapp = next_1.default({ dev: dev });
exports.default = nextapp;
//# sourceMappingURL=routes.js.map