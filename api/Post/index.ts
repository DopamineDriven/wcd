import fetch from "node-fetch";
import { Post, EntityId } from "../../shared";
import { config } from "../Config";

export const fetchPost = async (id: EntityId): Promise<Post> => {
    const res = await fetch(`${config.baseUrl}/posts/${id}`);
    return await res.json();
};