import React, { FC } from "react";
import Link from "next/link";
import { Post as PostType } from "../../shared";
import {
	CardPostCard,
	FigurePostCard,
	LeadPostCard,
	TitlePostCard
} from "../Style";

interface PostCardProps {
	post: PostType;
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
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
