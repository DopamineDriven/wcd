import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Post as PostType } from "../../shared/types";
import { CardPost, FigurePost, LeadPost, TitlePost } from "../Style";

interface PostProps {
    post: PostType;
}

export const Post: FunctionComponent<PostProps> = ({ post }) => {
    return (
        <Link href="/post/[id]" as={`/post/${post.id}`} passHref>
            <CardPost>
                <FigurePost>
                    <img alt={post.title} src={post.image} />
                </FigurePost>
                <TitlePost>
                    {post.title}
                </TitlePost>
                <LeadPost>
                    {post.lead}
                </LeadPost>
            </CardPost>
        </Link>
    );
};