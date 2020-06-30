import React, { FC } from "react";
import Link from "next/link";
import { Post } from "../../shared";
import { ContainerBreadcrumbs } from "../Style";

interface BreadcrumbsProps {
	post: Post;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ post }) => {
	return (
		<ContainerBreadcrumbs>
			<Link href="/">
				<a>Home</a>
			</Link>
			<span>▸</span>
			<Link href="/category/[id]" as={`/category/${post.category}`}>
				<a>{post.category}</a>
			</Link>
		</ContainerBreadcrumbs>
	);
};
