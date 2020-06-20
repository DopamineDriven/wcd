import React, { FunctionComponent } from "react";
import { Post as PostType} from "../../shared/types";
import { Post } from "../Post";
import { GridSection, TitleSection } from '../Style';

interface SectionProps {
    title: string;
    posts: PostType[];
}

export const Section: FunctionComponent<SectionProps> = ({ title, posts }) => {
    return (
        <section>
            <TitleSection>
                {title}
            </TitleSection>
            <GridSection>
                {posts.map((post) => (
                    <Post 
                        key={post.id}
                        post={post}
                    />
                ))}
            </GridSection>
        </section>
    )
};