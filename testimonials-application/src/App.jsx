import { useState } from "react";
import "./styles/style.css";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const testimonials = [
    {
      quote: "This is the best service I have ever used. Highly recommended!",
      author: "John Doe",
      role: "CEO, TechCorp"
    },
    {
      quote: "Amazing experience! The team was very professional and efficient.",
      author: "Jane Smith",
      role: "Marketing Director"
    },
    {
      quote: "I am extremely satisfied with the results. Will definitely use again!",
      author: "Alice Johnson",
      role: "Freelance Designer"
    },
    {
      quote: "Exceptional quality and outstanding customer support. Five stars!",
      author: "Bob Wilson",
      role: "App Developer"
    },
  ];

  // Helper function to trigger the fade animation
  const triggerFade = () => {
    setFade(true);
    setTimeout(() => setFade(false), 300); // Turn it off after animation finishes
  };

  const prevHandleClick = () => {
    triggerFade();
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
  };

  const nextHandleClick = () => {
    triggerFade();
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="app-container">
      <div className={`testimonial-card ${fade ? "fade-in" : ""}`}>
        <div className="quote-icon">“</div>
        
        <p className="testimonials-quote">
          {testimonials[currentIndex].quote}
        </p>
        
        <div className="author-info">
          <h4 className="testimonials-author">{testimonials[currentIndex].author}</h4>
          <p className="testimonials-role">{testimonials[currentIndex].role}</p>
        </div>

        <div className="testimonials-nav">
          <button onClick={prevHandleClick} className="nav-btn">←</button>
          
          <div className="dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => {
                  triggerFade();
                  setCurrentIndex(index);
                }}
              ></span>
            ))}
          </div>

          <button onClick={nextHandleClick} className="nav-btn">→</button>
        </div>
      </div>
    </div>
  );
};

export default App;