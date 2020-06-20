import React, { FunctionComponent } from "react";
import { Center, ContainerFooter } from "../Style";

export const Footer: FunctionComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <ContainerFooter>
            <Center>
                <a href="https://github.com/DopamineDriven/wcd" target="__blank">{currentYear}</a>
            </Center>
        </ContainerFooter>
    );
};