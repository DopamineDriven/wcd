import React, { FC } from "react";
import { NextPage } from "next";
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

const SubSOS = styled.h3`
	font-size: 5rem;
	line-height: 11rem;
	font-family: ${(p) => p.theme.fonts.accent};
	width: 100%;
`;

const LinkSOS = styled.a`
	font-size: 3.5rem;
	line-height: 4rem;
	font-family: ${(p) => p.theme.fonts.accent};
	width: 100%;
`;

const NotFound: FC & NextPage = () => {
	return (
		<ContainerSOS>
			<MainSOS>404</MainSOS>
			<SubSOS>That&apos;s an error</SubSOS>
			<Link href="/">
				<LinkSOS>Return Home</LinkSOS>
			</Link>
		</ContainerSOS>
	);
};

export default NotFound;
