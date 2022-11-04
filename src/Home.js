import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [input, setInput] = useState("");
  const [meal, setMeal] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  async function getData() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    const json = await response.json();
    setMeal([...json.meals]);
    console.log(meal);
  }
  const navigate = useNavigate();

  return (
    <div>
      <input value={input} onChange={handleInput} />
      <button onClick={getData}>SEARCH</button>
      <div>
        {meal.map((dish) => (
          <h2
            style={{ color: "red" }}
            onClick={() => navigate(`/mealdetails/${dish.idMeal}`)}
          >
            {dish.strMeal}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Home;
