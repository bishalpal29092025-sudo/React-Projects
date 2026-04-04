import { useState } from "react";
import Search from "./components/Search";
import ProfileCard from "./components/ProfileCard";
import "./styles/style.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUser(username) {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`https://api.github.com/users/${username}`);
      
      if (!res.ok) throw new Error("User not found");

      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>🔍 GitHub Profile Finder</h1>

      <Search onSearch={fetchUser} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {user && <ProfileCard user={user} />}
    </div>
  );
}