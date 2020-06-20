import React, { FunctionComponent } from "react";
import Link from "next/link";
import styled from "styled-components";

const ContainerSOS = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const MainSOS = styled.h2`
    font-size: 10rem;
    line-height: 11rem;
    font-family: ${(p) => p.theme.fonts.accent};
    width: 100%;
`;

const NotFound: FunctionComponent = () => {
    return (
        <ContainerSOS>
            <MainSOS>
                404
            </MainSOS>
            That's an error
            <Link href="/">
                Return Home
            </Link>
        </ContainerSOS>
    );
};

export default NotFound;