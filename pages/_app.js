// import App from 'next/app'
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../stylesheets/app.css';

function MyApp({ Component, pageProps }) {
    return <div>
        <Head>
            <title>𝖗𝖊𝖑𝖑𝖎𝖔𝖘</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </div>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext) => {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await App.getInitialProps(appContext);

//     return {
//         ...appProps,
//         crud_api_uri: process.env.CRUD_API_URI
//     }
// }

export default MyApp
