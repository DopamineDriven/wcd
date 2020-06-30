import fetch from "node-fetch";
import { Post, EntityId } from "../../shared";
import { config } from "../Config";

export const fetchPostsByCategory = async (
	categoryId: EntityId
): Promise<Post[]> => {
	const res = await fetch(`${config.baseUrl}/categories/${categoryId}`);
	return await res.json();
};
