import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";
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

export async function getStaticProps({ params }: Params & GetStaticProps) {
	const post = await fetchPost(params.id as string);
	return { props: { post } };
}

export const getStaticPaths = async () => {
	return { paths, fallback: true };
};

const Post: FunctionComponent<PostProps> = ({ post }) => {
	const router = useRouter();

	return router.isFallback ? <Loader /> : <PostBody post={post} />;
};

export default Post;
