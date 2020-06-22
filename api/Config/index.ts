import * as dotenv from "dotenv";
dotenv.config();

export const config = {
	baseUrl: `http://localhost:${process.env.PORT}`
};
