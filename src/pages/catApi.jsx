import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { useState } from "react";
import styles from "@/src/styles/Home.module.css";

export default function CatAPI() {
  const [catArray, setCatArray] = useState([]);

  const fetchItems = async () => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    const data = await res.json();

    setCatArray((prevArray) => {
      return [...prevArray, ...data];
    });
  };

  const clearItems = () => {
    setCatArray([]);
  };

  return (
    <>
      <Header />
      <div className={styles.inner}>
        <h1 className={styles.title}>Random Cat Pics Generator</h1>
        <p className={styles.text}>
          Press the button below to get 10 cat pics!!
        </p>
        <button className={styles.button} onClick={fetchItems}>
          Get Cat Pics!
        </button>
        <button className={styles.button} onClick={clearItems}>
          Clear the feed!
        </button>
        <ul className={styles.grid}>
          {catArray.map((item) => {
            return (
              <li className={styles.card} key={item.id}>
                <img
                  className={styles.image}
                  src={item.url}
                  alt=""
                  // width={item.width}
                  // height={item.height}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
