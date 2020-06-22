import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Center, Footer, Header } from "../components";
import { GlobalStyle, theme } from "../shared";
import "antd/dist/antd.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle theme={theme} />
			<Head>
				<title>Next.ts</title>
			</Head>
			<Header />
			<main className="main">
				<Center>
					<Component {...pageProps} />
				</Center>
			</main>
			<Footer />
		</ThemeProvider>
	);
}
