import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center">
        <h1 className="mx-auto text-4xl font-bold">Hello World !</h1>
      </main>
    </div>
  );
}
