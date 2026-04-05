import { useState, useEffect, useRef } from "react";
import Suggestions from "./Suggestions";

const SearchAutocomplete = () => {
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);
  const [activeIndex, setActiveIndex] = useState(-1);

  const wrapperRef = useRef(null);

  // 🌐 Fetch users
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data); // ✅ show all initially
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    }
    fetchUsers();
  }, []);

  // ⏳ Debounce + Filter
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchParam.length > 0) {
        const filtered = users.filter((user) =>
          user.name
            .toLowerCase()
            .includes(searchParam.toLowerCase())
        );
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers(users); // ✅ show all again
      }

      setShowDropdown(true);
      setActiveIndex(-1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchParam, users]);

  // ❌ Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ⌨️ Input change
  function handleChange(e) {
    setSearchParam(e.target.value);
  }

  // 🖱 Click suggestion
  function handleClick(user) {
    setSearchParam(user.name);
    setShowDropdown(false);
  }

  // ⌨️ Keyboard navigation
  function handleKeyDown(e) {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filteredUsers.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0) {
        handleClick(filteredUsers[activeIndex]);
      }
    }
  }

  return (
    <div ref={wrapperRef} className="relative w-80 mx-auto mt-10">
      {/* Input */}
      <input
        value={searchParam}
        placeholder="Search Users..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Dropdown */}
      {showDropdown && filteredUsers.length > 0 && (
        <Suggestions
          data={filteredUsers}
          handleClick={handleClick}
          activeIndex={activeIndex}
          searchParam={searchParam}
        />
      )}
    </div>
  );
};

export default SearchAutocomplete;