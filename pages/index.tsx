import React from "react";
import Head from "next/head";
import { Feed } from "../components";

export default function Front () {
	return (
		<>
			<Head>
				<title>Website Landing Page</title>
			</Head>

			<main>
                <Feed />
            </main>
		</>
	);
};
