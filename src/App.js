import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MealDetails from "./MealDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mealdetails/:id" element={<MealDetails />} />
    </Routes>
  );
}

export default App;
