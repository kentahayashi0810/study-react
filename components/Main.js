import { Inter } from "next/font/google";
import styles from "./Main.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Headline page={props.page} />
      <Links />
    </main>
  );
}
