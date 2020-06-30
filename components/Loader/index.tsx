import React, { FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { ContainerLoader } from "../Style";

export const Loader: FC = () => {
	return (
		<ContainerLoader>
			<LoadingOutlined spin={true} />
            Loading...
		</ContainerLoader>
	);
};
