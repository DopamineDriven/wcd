import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Post } from "../../shared";
import {
	ContentPostBody,
	FigurePostBody,
	MetaPostBody,
	TitlePostBody
} from "../Style";

interface PostBodyProps {
	post: Post;
}

export const PostBody: FunctionComponent<PostBodyProps> = ({ post }) => {
	return (
		<div>
			<TitlePostBody>{post.title}</TitlePostBody>
			<FigurePostBody>
				<img src={post.image} alt={post.title} />
			</FigurePostBody>

			<ContentPostBody dangerouslySetInnerHTML={{ __html: post.content }} />

			<MetaPostBody>
				<span>{post.date}</span>
				<span>&middot;</span>
				<Link href="/category/[id]" as={`/category/${post.category}`}>
					<a>{post.category}</a>
				</Link>
				<span>&middot;</span>
				<a href={post.source}>Source</a>
			</MetaPostBody>
		</div>
	);
};
