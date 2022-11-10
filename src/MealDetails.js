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
    <div className="container">
      <h1 className="title">{meal.strMeal}</h1>
      <h2 className="subTitle" >{meal.strArea}</h2>
      <h3 className="subTitle2">{meal.strCategory}</h3>
      <p className="paragraph">{meal.strInstructions}</p>
      <img className="dishImg" src={meal.strMealThumb} />
    </div>
  );
}

export default MealDetails;
