# wcd

## Custom _app Component
- overrides App component to control page initialization
- Allows for customizations such as
    - Persisting layout between page changes
    - Keeping state when navigating pages
    - Custom error handling using 'componentDidCatch'
    - Inject additional data into pages
    - Add global CSS (such as is done in this app)
- 'Component' prop is the active page
    - when navigating between routes, 'Component' will change to the new page
    - therefore, any props sent to 'Component' will be received by the page
- 'pageProps' is an obj w/ the initial props preloaded for the page by one of the data fetching methods
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
- augments appication's html and body declarations
- includes initial props for expressing asynch server-rendering data requirements
- The following are required imports from 'next/document' for the page to be properly rendered 
```XML
<Html></Html>
<Head />
<Main/>
<NextScript />
```
- https://nextjs.org/docs/advanced-features/custom-document

