import React, { FC } from "react";
import { GetStaticProps, NextPage } from "next";
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

export const getStaticProps = async ({ params }: Params & GetStaticProps) => {
	const posts = await fetchPostsByCategory(params.id as string);
	return { props: { posts } };
}

export const getStaticPaths = async () => {
	return { paths, fallback: false };
};

const Category: FC<CategoryProps & NextPage> = ({ posts }) => {
	const router = useRouter();

	return router.isFallback ? (
		<Loader />
	) : (
		<Section posts={posts} title={router.query.id as string} />
	);
};

export default Category;
