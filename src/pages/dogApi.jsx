import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { useState } from "react";
import styles from "@/src/styles/Home.module.css";

const DogAPI = () => {
  const [src, setSrc] = useState();
  const fetchAPI = async () => {
    const res = await fetch("https://dog.ceo/api/breed/shiba/images/random");
    const img = await res.json();
    console.log(img);
    setSrc(img.message);
  };

  return (
    <>
      <Header />
      <div>
        <h2 className={styles.title}>Random Shiba dog generator</h2>
        <p className={styles.text}>Press the button to get your Shiba!</p>
        <button className={styles.button} onClick={fetchAPI}>
          Get Shiba
        </button>
        <img className={styles.image} src={src} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default DogAPI;
