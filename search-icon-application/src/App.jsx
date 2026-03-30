import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles/style.css";

const App = () => {
  const [active, setActive] = useState(false);

  const handleContainerClick = (e) => {
    // If user clicks the background container, close the search
    if (e.target.classList.contains("container")) {
      setActive(false);
    }
  };

  return (
    <section className="container" onClick={handleContainerClick}>
      {/* We use the 'active' state to add a class to the wrapper */}
      <div className={`search-wrapper ${active ? "active" : ""}`}>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search anything..." 
        />
        <button className="search-btn" onClick={() => setActive(true)}>
          <FaSearch size={18} />
        </button>
      </div>
    </section>
  );
};

export default App;