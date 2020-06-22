import React, { FunctionComponent } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { ContainerLoader } from "../Style";

export const Loader: FunctionComponent = () => {
	return (
		<ContainerLoader>
			<LoadingOutlined spin={true} />
            Loading...
		</ContainerLoader>
	);
};
