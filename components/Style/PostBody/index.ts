import styled from "styled-components";

export const TitlePostBody = styled.h2`
    font-size: 2.8rem;
    line-height: 1.2;
    margin: 10px 0 20px;


    @media (max-width: 800px) {
        font-size: 1.8rem;
        margin: 15px 0;
    }
`;

export const LeadPostBody = styled.h4`
    margin: 0 20px 20px 0px;
    font-size: 1.6rem;
    font-weight: 0.5em;

    & > * {
        margin: 0 0 10px;
    }
`;


export const FigurePostBody = styled.figure`
    padding: 0 10% 0 0;
    margin: 0 20px 30px;
    max-width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 6px;

    image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        object-fit: cover;
        object-position: center;
    }

    @media (max-width: 800px) {
        margin-bottom: 10px;
    }
`;

export const ContentPostBody = styled.div`
    font-size: 1.25rem;
    line-height: 1.4;
    max-width: 800px;
    text-align: justify;
`;

export const MetaPostBody = styled.footer`
    color: ${(p) => p.theme.colors.gray};

    & > * {
        margin-right: 0.3em;
    }
`;