import styles from "@/src/components/Headline/Headline.module.css";
import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Headline = (props) => {
  return (
    <>
      <div className={styles.description}>
        <p>Get started by editing&nbsp;</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.center}>
        <h1 className={styles.title}>{props.page} Page</h1>
      </div>
      {props.children}
      <button onClick={props.handleReduce}>減らす</button>
    </>
  );
};
