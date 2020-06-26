import * as dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
import { Category, Post } from "../../shared";
import { config } from "../Config";

export const fetchPosts = async (): Promise<Post[]> => {
	try {
		const res = await fetch(`${config.baseUrl}/posts`);
		return await res.json();
	} catch (error) {
		throw new Error(`fetchPosts error - ${error}`);
	}
};

export const fetchCategories = async (): Promise<Category[]> => {
	try {
		const res = await fetch(`${config.baseUrl}/categories`);
		return await res.json();
	} catch (error) {
		throw new Error(`fetchCategories error - ${error}`);
	}
};
