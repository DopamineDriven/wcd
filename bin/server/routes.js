"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const dev = process.env.NODE_ENV !== 'production';
const nextapp = next_1.default({ dev });
exports.default = nextapp;
//# sourceMappingURL=routes.js.map