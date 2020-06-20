import React, { FunctionComponent } from "react";
import { Post } from "../Post";
import { GridSection, TitleSection } from '../Style';

interface SectionProps {
    title: string;
}

export const Section: FunctionComponent<SectionProps> = ({ title }) => {
    return (
        <section>
            <TitleSection>
                {title}
            </TitleSection>
            <GridSection>
                <Post />
                <Post />
                <Post />
            </GridSection>
        </section>
    )
};