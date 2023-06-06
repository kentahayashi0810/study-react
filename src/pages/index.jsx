import Head from "next/head";
import { Inter } from "next/font/google";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo = 1;

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.href);
    alert(foo);
  };
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />

      <Footer />
    </>
  );
}
