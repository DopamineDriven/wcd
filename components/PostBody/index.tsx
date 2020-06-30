import React, { FC } from "react";
import Link from "next/link";
import { Post } from "../../shared";
import {
	ContentPostBody,
	FigurePostBody,
	LeadPostBody,
	MetaPostBody,
	TitlePostBody
} from "../Style";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Breadcrumbs } from "../Breadcrumbs";

interface PostBodyProps {
	post: Post;
}

export const PostBody: FC<PostBodyProps> = ({ post }) => {
	return (
		<div>
			<Breadcrumbs post={post} />
			<TitlePostBody>{post.title}</TitlePostBody>
			<FigurePostBody>
				{post.category !== "People" ? (
					<img src={post.image} alt={post.title} />
				) : (
					<Avatar
						src={post.image}
						alt={post.title}
						style={{ verticalAlign: "center" }}
						icon={<UserOutlined />}
						shape="circle"
						size={400}
					/>
				)}
			</FigurePostBody>
			<LeadPostBody>{post.lead}</LeadPostBody>
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

/*
			<FigurePostBody>
				<Avatar src={post.image} alt={post.title} icon={<UserOutlined />} shape="circle" />
			</FigurePostBody>
*/
