import styled from "styled-components";

export const GridSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &:after {
        content: "";
        flex: auto;
    }

    &:after,
    & > * {
        width: calc(30% - 2px);
        margin-bottom: 20px;
    }

    @media (max-width: 800px) {
        &:after,
        & > * {
            width: 100%
        }
    }
`;

export const TitleSection = styled.h2`
    font-size: 2.8rem;
    line-height: 1.1;
    margin: 10px 0 15px;

    @media (max-width: 800px) {
        font-size: 2rem;
    }
`;

export const LinkSection = styled.a`
    margin: -20px 0 30px;
    display: inline-block;
    vertical-align: top;
`;