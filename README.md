# 🐜 Windy City Devs LLC 🐜
- 07/03/20
```json
{
"scripts": {
	"tsc": "tsc -p tsconfig-cjs.json",
	"prod": "rm -rf .next && next build && tsc --project tsconfig.server.json",
	"production": "run-p prod:productionserver prod:server",
	"prod:productionserver": "node ./.next/production-server/server/index.js",
	"prod:server": "node ./.next/server/init-server.js",
	"build:prod": "cross-env NODE_ENV=production && run-s prebuild build export start",
	"client": "next",
	"analyze": "cross-env BUNDLE_ANALYZE=both npm run build",
	"watch": "./node_modules/.bin/tsc-watch --onSuccess -f \"ts-node .\"",
	"vercel:build": "next build && tsc --project tsconfig.server.json",
	"prebuild": "cross-env NODE_ENV=production && node ./scripts/env-check.js && rimraf build",
	"build": "rm -rf .next && run-p serve vercel:build watch",
	"prestart": "npm run export",
	"start": "serve out",
	"seed": "ts-node --compiler-options=\"{\\\"module\\\": \\\"commonjs\\\"}\" cloud/seed.ts",
	"clear": "ts-node --compiler-options=\"{\\\"module\\\": \\\"commonjs\\\"}\" cloud/clear.ts",
	"serve": "ts-node --compiler-options=\"{\\\"module\\\": \\\"commonjs\\\"}\" --project tsconfig.server.json server/index.ts",
	"exe:dev": "ts-node --transpile-only --compiler-options=\"{\\\"module\\\": \\\"commonjs\\\"}\"",
	"dev": "concurrently --kill-others \"npm run serve\" \"next\" --compiler-options=\"{\\\"module\\\": \\\"commonjs\\\"}\"",
	"export": "next export",
	"vercel:export": "npm run export"
},
}
```
## Measuring performance
- https://nextjs.org/docs/advanced-features/measuring-performance

## Toggle Script Messages to exit on success
- https://stackoverflow.com/questions/21831493/my-nodejs-script-is-not-exiting-on-its-own-after-successful-execution/32617487#32617487
- https://github.com/vercel/next.js/issues/4647
- https://nodejs.org/api/process.html#process_event_exit
- https://nodejs.org/api/process.html#process_process_exit_code
- https://github.com/nodejs/node-v0.x-archive/blob/master/doc/api/process.markdown#exit-codes
- https://github.com/microsoft/TypeScript/issues/12996
- https://corgibytes.com/blog/2017/04/18/npm-tips/
- https://stackabuse.com/how-to-exit-in-node-js/
- https://nodejs.org/api/process.html#process_process_argv
- https://github.com/gilamran/tsc-watch/blob/master/release.js
- https://openbase.io/js/tsc-watch
- https://github.com/gilamran/tsc-watch/blob/master/package.json
- https://www.npmjs.com/package/tsc-watch
## Next Examples

- https://github.com/vercel/next.js/tree/canary/examples

## Consider incorporating

- swr.now.sh - stale-while-revalidate - TypeScript ready - SSR support - hmm...

## Updating Post data in ./cloud/seed.ts

- each time an update is made run the following in order

```git
npm run clear
```

```git
npm run seed
```

- then double check to ensure that the data was pulled from the cloud correctly

```git
npm run dev
```

## Deploy with Vercel

- https://vercel.com/docs/configuration#introduction/configuration-reference
- direct path to prod server

```json
{
	"start": "node ./.next/production-server/server/index.js"
}
```

## Deploy with heroku

- include after "scripts"

```json
{
	"heroku-run-build-script": "true"
}
```

## New Next Methods

- https://nextjs.org/blog/next-9-3 (03-09-2020)
- https://nextjs.org/blog/next-9-4 (05-11-2020)

## TypeScript & Styled Components Next.js Example

- https://github.com/vercel/next.js/tree/canary/examples/with-typescript-styled-components

## ESLint+TS in Next -- Analyzing Overhead Performance Cost Incurrence

### Overview

- ESLint - JS Linter - parses source code into an AST (Abstract Syntax Tree), a JS-AST - JS-AST used by plugins to create assertions (lint rules)
- TypeScript - JS Superset, static code analyzer - TS compiler parsers code into a TS-AST - TS-AST - TS-AST !== JS-AST - Why? TS is a superset, it supports additional properties - annotations, decorators, generics, interfaces, enums, modules, tuples, etc
- Consider the following

```ts
const x: number = 1;
```

- when compiler parses TS&rarr;TS-AST, the "number" type annotation is represented
- ESLint cannot handle TS-AST alone
- ESLint is comprised of several libraries, more moving parts - ships with built-in parser, espree (estree in TS)

```ts
// from node_modules\@typescript-eslint\typescript-estree\dist\convert-comments.d.ts
import * as ts from "typescript";
import { TSESTree } from "./ts-estree";
/**
 * Convert all comments for the given AST.
 * @param ast the AST object
 * @param code the TypeScript code
 * @returns the converted ESTreeComment
 * @private
 */
export declare function convertComments(
	ast: ts.SourceFile,
	code: string
): TSESTree.Comment[];
//# sourceMappingURL=convert-comments.d.ts.map
```

- use in a .ts file

```ts
import {
	parse,
	parseAndGenerateServices
} from "@typescript-eslint/typescript-estree";

const code = `string of code to be parsed into an AST`;
// parses code with options provided, returns ESTree-compatible AST
const ast1 = parse(code, {
	loc: true,
	range: true
});

// accepts additional options relative to parse
// can generate an AST containing type information
const ast2 = parseAndGenerateServices(code, {
	filePath: "/some/path",
	loc: true,
	project: "../tsconfig.json",
	range: true
});
```

#### References

- https://www.npmjs.com/package/@typescript-eslint/typescript-estree?activeTab=readme
- https://rmolinamir.github.io/typescript-cheatsheet/
- https://duncanleung.com/profile-measure-find-remove-slow-eslint-rules/
- https://github.com/typescript-eslint/typescript-eslint#how-does-typescript-eslint-work-and-why-do-you-have-multiple-packages
- https://github.com/eslint/espree
- https://duncanleung.com/why-slow-plugin-typescript-eslint-performance-issues/
- https://github.com/vercel/next.js/issues/8841

### TS &rarr; TS-AST

- TypeScript-ESLint converts TS-AST into an ESLint AST - ESLint runs rules against AST generated by ESLint-JS parser &rarr; Espree - Espree: https://github.com/eslint/espree

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

- Now, create index.tsx in the `pages` dir

```gitbash
cd pages && touch index.tsx && cd ..
```

- Note: must export all page components as default functions when using the next framework

```tsx
import React from "react";
import Head from "next/head";

export default function Front() {
	return (
		<>
			<Head>
				<title>Website Landing Page</title>
			</Head>
			<main>Next is Now</main>
		</>
	);
}
```

## styled-components

- https://styled-components.com/docs/api
- https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
- https://github.com/zeit/next.js/tree/canary/examples/with-styled-components

## Custom \_app Component

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

## Custom \_document Component

- augments html and body declarations for appication
- includes initial props for expressing asynchronous server-rendering data requirements
- The following are required imports from 'next/document' for the page to be properly rendered

```XML
<Html></Html>
<Head />
<Main />
<NextScript />
```

- https://nextjs.org/docs/advanced-features/custom-document

---

## Creating the Feed, Post, and Section Components

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

### useRouter Hook from `next/router`

- https://nextjs.org/docs/api-reference/next/router
- ./pages/post/[id].tsx
- destructure pathname and query props from useRouter hook

```tsx
import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";

const Post: FunctionComponent = () => {
	const { pathname, query } = useRouter();

	return (
		<div>
			Pathname: {pathname};<br />
			Post Id: {query.id}
		</div>
	);
};

export default Post;
```

---

### Abbreviations

- &nbsp or &middot, for example
- https://www.toptal.com/designers/htmlarrows/punctuation/middle-dot/

## Enter `dangerouslySetInnerHTML`

- used in ./components/PostBody/index.tsx for simplicity sake
  - Add text preprocessing to avoid leaving an opening for XSS attacks (REVISIT)

```tsx
import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Post } from "../../shared";
import {
	ContentPostBody,
	FigurePostBody,
	MetaPostBody,
	TitlePostBody
} from "../Style";

interface PostBodyProps {
	post: Post;
}

export const PostBody: FunctionComponent<PostBodyProps> = ({ post }) => {
	return (
		<div>
			<TitlePostBody>{post.title}</TitlePostBody>
			<FigurePostBody>
				<img src={post.image} alt={post.title} />
			</FigurePostBody>

			<ContentPostBody dangerouslySetInnerHTML={{ __html: post.content }} />

			<MetaPostBody>
				<span>{post.date}</span>
				<span>&middot;</span>
				<Link href="/category/[id]" as={`/category/${post.category}`}>
					<a>{post.category}</a>
				</Link>
				<span>&middot;</span>
				<a href={post.source}>Source</a>
			</MetaPostBody>
		</div>
	);
};
```

### Adding a secondary `build` tsconfig

- https://kjaer.io/ts-npm-config/

### TypeScript + Babbel

- https://iamturns.com/typescript-babel/

### Public Folder houses Static Assets

- https://stackoverflow.com/questions/56213019/how-to-add-a-favicon-to-a-next-js-static-site

### Git rename local and remote branch

- https://www.majidhajian.com/blog/git-rename-local-and-remote-branch

```js
module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
		"eslint-config-prettier"
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ["@typescript-eslint", "prettier"],
	env: {
		node: true,
		es6: true,
		browser: true
	},
	rules: {
		// could set "indent": [true, "tabs", 1]
		"react/prop-types": "off",
		indent: "off",
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"prettier/prettier": "error"
	},
	settings: {
		react: {
			version: "detect"
		}
	}
};
```

---

- Next.js, Apollo Client/Server, and TypeScript on a single Express app - https://dev.to/givehug/next-js-apollo-client-and-server-on-a-single-express-app-55l6

---

- Wasted renders
- Bundle size
- Expensive operations

- on configuring babel with styled components - https://github.com/styled-components/babel-plugin-styled-components/issues/78

```json
{
	"presets": [
		[
			"next/babel",
			{
				"preset-env": {},
				"transform-runtime": {},
				"styled-jsx": {},
				"class-properties": {}
			}
		]
	],
	"plugins": [
		[
			"babel-plugin-styled-components",
			{
				"ssr": true,
				"displayName": true,
				"preprocess": false
			}
		]
	]
}
```

```json
	"babel": {
		"presets": [
			"babel-preset-react-app",
			"next/babel",
			"@zeit/next-typescript/babel"
		]
	},
```

- Ordering matters for Plugins/Presets - Plugins run before presets - Plugin ordering is first to last - Preset ordring is last to first - https://babeljs.io/docs/en/6.26.3/plugins#plugin-preset-ordering

- The super tiny compiler - walks you through writing a custom compiler to parse code into an AST - https://github.com/jamiebuilds/the-super-tiny-compiler/blob/master/the-super-tiny-compiler.js
- MongoDB Atlas with Next - https://github.com/kukicado/building-modern-app-with-nextjs-and-mongodb
