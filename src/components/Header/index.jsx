import styles from "@/src/components/Header/Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        Index
      </Link>
      <Link href="/about" className={styles.link}>
        About
      </Link>
      <Link href="/test" className={styles.link}>
        Test
      </Link>
      <Link href="/dogApi" className={styles.link}>
        Dog API
      </Link>
      <Link href="/catApi" className={styles.link}>
        Cat API
      </Link>
      <Link href="/recipe" className={styles.link}>
        Recipe
      </Link>
    </header>
  );
}
