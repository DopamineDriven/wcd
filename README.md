# 🐜 Windy City Devs LLC 🐜

## Extensions to Install
- vscode-styled-components
- styled-components-snippets

## Getting Started with Next
- `pages` dir is required
    - indicates to Next framework where app pages are located
- `public` dir is required
    - indicates to Next framework where static resources are located

```gitbash
mkdir pages public && npm init -y
```
```gitbash
npm i --save react react-dom && npm i --save-dev typescript @types/react @types/react-dom @types/node
```

- next, set up scripts in package.json
```JSON
{
    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
    }
}
```

- then, configure a TypeScript dev environment
```gitbash
touch tsconfig.json
```

- now start the dev script
```gitbash
npm run dev
```
- why?
    - Next automatically populates tsconfig w/ default values upon launching dev

- Good work so far. Now, create index.tsx in the `pages` dir
```gitbash
cd pages && touch index.tsx && cd ..
```
- Note: must export all page components as default functions when using the next framework
```tsx
import React from "react";
import Head from "next/head";

export default function Front () {
	return (
		<>
			<Head>
				<title>Website Landing Page</title>
			</Head>
			<main>Next is Now</main>
		</>
	);
};
```

## styled-components
- https://styled-components.com/docs/api
- https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
- https://github.com/zeit/next.js/tree/canary/examples/with-styled-components


## Custom _app Component
- overrides App component to control page initialization
- Allows for customizations such as
    - Persisting layout between page changes
    - Keeping state when navigating pages
    - Custom error handling using 'componentDidCatch'
    - Inject additional data into pages
    - Add global CSS (such as is done in this app)
- `Component` prop is the active page
    - when navigating between routes, `Component` will change to the new page
    - therefore, any props sent to `Component` will be received by the page
- `pageProps` is an obj w/ the initial props preloaded for the page by one of the data fetching methods
    - custom app advanced features: https://nextjs.org/docs/advanced-features/custom-app
    - data fetching methods: https://nextjs.org/docs/basic-features/data-fetching
    - typescript specific: https://nextjs.org/docs/basic-features/typescript#custom-app

```tsx
const MyApp = ({ Component, pageProps }) => {
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
};

export default MyApp;
```

## Custom _document Component
- augments html and body declarations for appication
- includes initial props for expressing asynchronous server-rendering data requirements
- The following are required imports from 'next/document' for the page to be properly rendered 
```XML
<Html></Html>
<Head />
<Main/>
<NextScript />
```
- https://nextjs.org/docs/advanced-features/custom-document

------------------------------------------------------------------------------------------
## Creating a Feed Component
- This can showcase recent projects, projects in progress, example websites for specific usecases (eg restaurants), etc
- starting from the root directory
```gitbash
cd components && mkdir Feed && cd Feed && touch index.tsx && cd ../..
```
- a section component and its corresponding style file must also be created as follows
- again, starting from the root directory
```gitbash
cd components && mkdir Section && cd Section && touch index.tsx && cd ../Style && mkdir Section && cd Section && touch index.ts && cd ../../..
```
- Post, another component, and its corresponding style file must also be created
```gitbash
cd components && mkdir Post && cd Post && touch index.tsx && cd ../Style && mkdir Post && cd Post && touch index.ts && cd ../../..
```
- whew lad, bash proficiency -> optimal efficiency
    - always try to start in the root and end in the root (best practice)