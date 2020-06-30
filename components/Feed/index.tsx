import React, { FC } from "react";
import { Section } from "../Section";
import { Category, Post } from "../../shared";

interface FeedProps {
    categories: Category[];
    posts: Post[];
}


export const Feed: FC<FeedProps> = ({ categories, posts }) => {
    return (
        <>
            {categories.map((currentCategory) => {
                const inSection = posts.filter(
                    (post) => post.category === currentCategory
                )

                return (
                    <Section 
                        key={currentCategory}
                        title={currentCategory}
                        posts={inSection}
                        isCompact
                    />
                )
            })}
        </>
    )
};