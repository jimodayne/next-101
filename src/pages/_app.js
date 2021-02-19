import Head from "next/head";
import Layout from "../module/layout";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="bg-white p-4">
          <Component {...pageProps} />
        </main>
      </Layout>
    </div>
  );
}

export default MyApp;
