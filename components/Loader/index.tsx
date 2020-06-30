import React, { FC } from "react";
import { Spin, Space } from 'antd';
import { ContainerLoader } from "../Style";

export const Loader: FC = () => {
	return (
		<ContainerLoader>
			<Space size="middle">
				<Spin  
					size="large"
					spinning={true}
				/>
			</Space>
		</ContainerLoader>
	);
};
