import React, { FunctionComponent } from "react";
import Link from "next/link";
import { CardPost, ContentPost, FigurePost, TitlePost } from "../Style";

export const Post: FunctionComponent = () => {
    return (
        <Link href="/post/[id]" as="/post/suchexample" passHref>
            <CardPost>
                <FigurePost>
                    <img alt="post photo" src="/doge.jpg" />
                </FigurePost>
                <TitlePost>🎯</TitlePost>
                <ContentPost>
                    <p>
                        Serving static assets like a mofo 
                    </p>
                </ContentPost>
            </CardPost>
        </Link>
    );
};