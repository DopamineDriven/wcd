import React, { FC } from "react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { fetchPost } from "../../api";
import { Post as PostType } from "../../shared";
import { postPaths as paths } from "../../shared";
import { Loader, PostBody } from "../../components";
import { ParsedUrlQuery } from 'querystring';

interface PostProps {
	post: PostType;
}

interface Params {
	params: ParsedUrlQuery;
}

export const getStaticProps = async ({ params }: Params & GetStaticProps) => {
	const post = await fetchPost(params.id as string);
	return { props: { post } };
}

export const getStaticPaths = async () => {
	return { paths, fallback: false };
};

const Post: FC<PostProps & NextPage> = ({ post }) => {
	const router = useRouter();

	// try:
	// return !post || !posts ? <Loader /> : <PostBody post={post} />
	return router.isFallback ? <Loader /> : <PostBody post={post} />;
};

export default Post;

/*
import React, { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter, Router } from "next/router";
import { fetchPost } from "../../api";
import { Post as PostType, PostStaticParams, PostStaticPath } from "../../shared";
import { postPaths as paths } from "../../shared";
import { Loader, PostBody } from "../../components";

interface PostProps {
	post: PostType;
}

interface StaticParams {
	params: PostStaticParams;
}

interface StaticPaths {
	paths: PostStaticPath[];
}

export const getStaticProps = async ({ params }: StaticParams & GetStaticProps) => {
	const post = await fetchPost(params.id as string);
	return { props: { post } };
}

export const getStaticPaths = async ({ paths }: StaticPaths & GetStaticPaths) => {
	return { paths, fallback: true };
};

const Post: FC<PostProps> = ({ post }) => {
	const router = useRouter();

	return router.isFallback ? <Loader /> : <PostBody post={post} />;
};

export default Post;

*/
