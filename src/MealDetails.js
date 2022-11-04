import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MealDetails() {
  const [meal, setMeal] = useState({});

  const { id } = useParams("id");

  async function getDetails() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const json = await response.json();
    setMeal({ ...json.meals[0] });
  }

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 40,
        fontFamily: "sans-serif",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "red" }}>{meal.strMeal}</h1>
      <h2 style={{ color: "green" }}>{meal.strArea}</h2>
      <h3 style={{ color: "green" }}>{meal.strCategory}</h3>
      <h5 style={{ color: "black" }}>{meal.strInstructions}</h5>
      <img src={meal.strMealThumb} />
    </div>
  );
}

export default MealDetails;
