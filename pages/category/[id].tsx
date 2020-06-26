import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { fetchPostsByCategory } from "../../api";
import { Post, categoryPaths as paths } from "../../shared";
import { Loader, Section } from "../../components";
import { ParsedUrlQuery } from 'querystring';

interface CategoryProps {
	posts: Post[];
}

interface Params {
	params: ParsedUrlQuery;
}

export async function getStaticProps({ params }: Params & GetStaticProps) {
	const posts = await fetchPostsByCategory(params.id as string);
	return { props: { posts } };
}

export const getStaticPaths = async () => {
	return { paths, fallback: true };
};

const Category: FunctionComponent<CategoryProps> = ({ posts }) => {
	const router = useRouter();

	return router.isFallback ? (
		<Loader />
	) : (
		<Section posts={posts} title={router.query.id as string} />
	);
};

export default Category;
