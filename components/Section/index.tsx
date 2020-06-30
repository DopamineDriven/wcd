import React, { FC } from "react";
import Link from "next/link";
import { Post as PostType } from "../../shared";
import { PostCard } from "../PostCard";
import { GridSection, LinkSection, TitleSection } from "../Style";

interface SectionProps {
	title: string;
	posts: PostType[];
	isCompact?: boolean;
}

export const Section: FC<SectionProps> = ({
	title,
	posts,
	isCompact = false
}) => {
	return (
		<section>
			<TitleSection>{title}</TitleSection>
			<GridSection>
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</GridSection>

			{isCompact && (
				<Link href={`/category/${title}`} passHref={true}>
					<LinkSection>More in {title}</LinkSection>
				</Link>
			)}
		</section>
	);
};
