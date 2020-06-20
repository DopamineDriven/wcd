import React, { FunctionComponent } from "react";
import { Center, ContainerFooter } from "../Style";

export const Footer: FunctionComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <ContainerFooter>
            <Center>
                <a href="https://fullstack.io" target="__blank">Fullstack.io</a> {currentYear}
            </Center>
        </ContainerFooter>
    );
};