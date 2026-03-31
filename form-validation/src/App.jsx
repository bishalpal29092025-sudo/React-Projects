import { useState } from "react";
import "./styles/style.css";

const App = () => {
  // 1. Group all input values into one object
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // 2. Group all errors into one object
  const [errors, setErrors] = useState({});

  // Helper to update form fields dynamically
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = (event) => {
    event.preventDefault();
    let localErrors = {};

    // Username Validation
    if (formData.userName.length < 8) {
      localErrors.userName = "Username must be at least 8 characters";
    }

    // Email Validation
    if (!formData.email.includes("@gmail")) {
      localErrors.email = "Email must include @gmail";
    }

    // Password Validation
    if (formData.password.length < 8) {
      localErrors.password = "Password must be at least 8 characters";
    }

    // Confirm Password Validation
    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
      localErrors.confirmPassword = "Passwords do not match";
    }

    // Update the error state all at once!
    setErrors(localErrors);

    // If there are no keys in the errors object, the form is valid!
    if (Object.keys(localErrors).length === 0) {
      alert("Form submitted successfully! 🎉");
    }
  };

  return (
    <div className="card">
      <form onSubmit={validate} className="form-container">
        <h2>Create Account</h2>

        <div className="input-group">
          <input
            type="text"
            id="userName"
            placeholder="Name"
            className={errors.userName ? "error-border" : formData.userName ? "success-border" : ""}
            value={formData.userName}
            onChange={handleChange}
          />
          {errors.userName && <p className="error-text">{errors.userName}</p>}
        </div>

        <div className="input-group">
          <input
            type="text"
            id="email"
            placeholder="Email"
            className={errors.email ? "error-border" : formData.email ? "success-border" : ""}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={errors.password ? "error-border" : formData.password ? "success-border" : ""}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <div className="input-group">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className={errors.confirmPassword ? "error-border" : formData.confirmPassword ? "success-border" : ""}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default App;