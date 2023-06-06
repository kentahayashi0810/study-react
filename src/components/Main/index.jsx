import { Inter } from "next/font/google";
import styles from "@/src/components/Main/Main.module.css";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";
// import { Links } from "@/src/components/Links";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Headline page={props.page} />
      <Links />
    </main>
  );
}
