import getConfig from 'next/config';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const url_serve = process.env.NEXT_PUBLIC_BASE_PATH;

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const contextPath = getConfig().publicRuntimeConfig.contextPath;

        return (
            <Html lang="en">
                <Head>
            </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
