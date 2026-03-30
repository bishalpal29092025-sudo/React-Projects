import { useState } from "react";
import "../styles/style.css";

const ToggleBackgroundColor = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    // We apply the theme class to the wrapper
    <div className={`app-wrapper ${theme}`}>
      <header>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </header>

      <section className="hero">
        <h1>
          Welcome To A <br /> <span>Real World...</span>
        </h1>
        <p>Experience the transition between light and shadow.</p>
      </section>
    </div>
  );
};
export default ToggleBackgroundColor;