import { EntityId, Category } from "../types";

export interface PostStaticParams {
	id: EntityId;
}

export interface PostStaticPath {
	params: PostStaticParams;
}

export const staticPostsIdList: EntityId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const postPaths: PostStaticPath[] = staticPostsIdList.map((id) => ({
	params: { id: String(id) }
}));

export interface CategoryStaticParams {
	id: Category;
}

export interface CategoryStaticPath {
	params: CategoryStaticParams;
}

export const categoriesToPreRender: Category[] = ["Science", "Technology", "People"];

export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
	(category) => ({
		params: { id: category }
	})
);
