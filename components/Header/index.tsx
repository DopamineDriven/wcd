import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Center, ContainerHeader, LogoHeader } from "../Style";

export const Header: FunctionComponent = () => {
	return (
		<ContainerHeader>
			<Center>
				<LogoHeader>
					<Link href="/">
						<a>NEXT</a>
					</Link>
				</LogoHeader>
			</Center>
		</ContainerHeader>
	);
};
