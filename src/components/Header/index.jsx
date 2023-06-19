import styles from "@/src/components/Header/Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/test", label: "Test" },
  { href: "/dogApi", label: "Dog API" },
  { href: "/catApi", label: "Cat API" },
  { href: "/recipe", label: "Recipe" },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
