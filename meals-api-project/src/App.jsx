import axios from "axios";
import { useState, useEffect } from "react";
import "./styles/style.css";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (query = "Pasta") => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setMeals(data.meals || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchMeals(); }, []);

  return (
    <div className="app-wrapper">
      <div className="hero-section">
        <div className="overlay">
          <h1 className="title">Find Your Next <span>Favorite Meal</span></h1>
          <form className="search-container" onSubmit={(e) => { e.preventDefault(); fetchMeals(searchTerm); }}>
            <input 
              type="text" 
              placeholder="Search recipes..." 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Explore</button>
          </form>
        </div>
      </div>

      <main className="content">
        {loading ? (
          <div className="loader"><span></span></div>
        ) : (
          <div className="recipe-grid">
            {meals.map((meal) => (
              <article key={meal.idMeal} className="recipe-card">
                <div className="image-box">
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <span className="category-tag">{meal.strCategory}</span>
                </div>
                <div className="recipe-details">
                  <p className="area-text">{meal.strArea} Cuisine</p>
                  <h3>{meal.strMeal}</h3>
                  <button className="view-btn">View Recipe</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;