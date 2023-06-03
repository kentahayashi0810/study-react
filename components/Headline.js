import styles from "@/styles/Home.module.css";

export function Headline(props) {
  return (
    <div className={styles.center}>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  );
}
