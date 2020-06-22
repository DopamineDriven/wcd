import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Post as PostType } from "../../shared/types";
import {
	CardPostCard,
	FigurePostCard,
	LeadPostCard,
	TitlePostCard
} from "../Style";

interface PostCardProps {
	post: PostType;
}

export const Post: FunctionComponent<PostCardProps> = ({ post }) => {
	return (
		<Link href="/post/[id]" as={`/post/${post.id}`} passHref={true}>
			<CardPostCard>
				<FigurePostCard>
					<img alt={post.title} src={post.image} />
				</FigurePostCard>
				<TitlePostCard>{post.title}</TitlePostCard>
				<LeadPostCard>{post.lead}</LeadPostCard>
			</CardPostCard>
		</Link>
	);
};
