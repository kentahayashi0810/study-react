import styles from "@/src/components/Links/Links.module.css";

export function Links({ items, handleReduce }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {item.title} <span>-&gt;</span>
            </h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
