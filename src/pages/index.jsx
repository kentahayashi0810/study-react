import Head from "next/head";
import { Inter } from "next/font/google";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください。");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <button onClick={handleClick}>カウントアップボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <p>{text}</p>
      {isShow ? <h1>{count}</h1> : null}
      <Main page="index" />

      <Footer />
    </>
  );
}
