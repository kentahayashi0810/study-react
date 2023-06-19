import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { useState } from "react";
import styles from "@/src/styles/Home.module.css";
import recipes from "../../public/json/recipe.json";
import Image from "next/image";

const Recipe = () => {
  const [parsedRecipes, setParsedRecipes] = useState([]);

  const getRecipe = () => {
    setParsedRecipes((prevRecipes) => recipes);
    console.log(parsedRecipes);
  };

  const clearFeed = () => {
    setParsedRecipes([]);
  };

  const oddRecipes = parsedRecipes.filter((item) => item.id % 2);
  const evenRecipes = parsedRecipes.filter((item) => !(item.id % 2));
  const bothRecipes = [oddRecipes, evenRecipes];

  return (
    <>
      <Header />
      <div className={styles.inner}>
        <button className={styles.button} onClick={getRecipe}>
          Get Recipe!
        </button>
        <button className={styles.button} onClick={clearFeed}>
          Clear the feed!
        </button>
        <div className={styles.gridContainer}>
          {bothRecipes.map((recipe, index) => {
            console.log(recipe);
            return (
              <ul key={index} className={styles.recipeGrid}>
                {recipe.map((item) => {
                  return (
                    <li
                      className={`${styles.card} ${styles.gridItem}`}
                      key={item.id}
                    >
                      <h3>{item.name}</h3>
                      <Image
                        alt=""
                        src={item.url}
                        layout="fill"
                        objectFit="cover"
                      ></Image>

                      <h4>Ingredients:</h4>
                      <ul>
                        {item.ingredients.map((ingredient) => {
                          return <li key={ingredient}>{ingredient}</li>;
                        })}
                      </ul>
                      <p className={styles.text}>
                        Estimated Cooking Time: {item.cookingTime} minutes
                      </p>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipe;
