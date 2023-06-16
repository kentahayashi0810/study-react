import { Inter } from "next/font/google";
import styles from "@/src/components/Main/Main.module.css";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";
import { useCallback, useState } from "react";

// import { Links } from "@/src/components/Links";

const inter = Inter({ subsets: ["latin"] });
const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn ",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];
export function Main(props) {
  const [items, setItems] = useState(ITEMS);

  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  });

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Headline handleReduce={handleReduce} page={props.page}>
        <code className={styles.code}>
          残りのアイテムの数は{items.length}個です。| {props.page}ページ
        </code>
      </Headline>
      <Links items={items} />
    </main>
  );
}
