import Link from "next/link";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Hello Next js</title>
        <meta name="keyword" description="" />
      </Head>
      <div>
        Hello World.{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </>
  );
};

export default IndexPage;
