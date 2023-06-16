import Head from "next/head";
import { Inter } from "next/font/google";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      <button onClick={handleClick}>カウントアップボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      {isShow ? <h1>{count}</h1> : null}

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加する</button>
      <p>{text}</p>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index" />

      <Footer />
    </>
  );
}
