import Head from "next/head";
import { Inter } from "next/font/google";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";

const inter = Inter({ subsets: ["latin"] });

const About = (props) => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />

      <button onClick={props.handleClick}>カウントアップボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      {props.isShow ? <h1>{props.doubleCount}</h1> : null}

      <hr />
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加する</button>
      <p>{props.text}</p>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />

      <Footer />
    </>
  );
};

export default About;
