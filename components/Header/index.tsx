import React, { FC } from "react";
import Link from "next/link";
import { Center, ContainerHeader, LogoHeader } from "../Style";

export const Header: FC = () => {
	return (
		<ContainerHeader>
			<Center>
				<LogoHeader>
					<Link href="/">
						<a>Windy City Devs</a>
					</Link>
				</LogoHeader>
			</Center>
		</ContainerHeader>
	);
};
