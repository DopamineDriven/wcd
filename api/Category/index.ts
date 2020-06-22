import * as dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
import { Post, EntityId } from "../../shared";
import { config } from "../Config";

export const fetchPostsByCategory = async (categoryId: EntityId): Promise<Post[]> => {
    const url = `${config.baseUrl}/categories/${categoryId}`;
    const res = await fetch(url);
    return res.json();
};