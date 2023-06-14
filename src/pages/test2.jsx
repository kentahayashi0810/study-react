import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { useState } from "react";

export default function Test2() {
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
        <h2>Random Shiba dog generator</h2>
        <p>Press the button to get your Shiba!</p>
        <button onClick={fetchAPI}>Get Shiba</button>
        <img src={src} alt="" />
      </div>
      <Footer />
    </>
  );
}
