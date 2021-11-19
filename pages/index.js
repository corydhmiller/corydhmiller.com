import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cory&apos;s Thoughts</title>
      </Head>
      <div className="max-w-5xl mx-auto w-full h-full flex place-items-center">
        Rebuilding this. See you soon.
      </div>
    </Layout>
  );
}
