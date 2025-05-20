import { useState } from "react";

const SearchBar = ({ onFound }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    try {
      const res = await fetch(`http://localhost:8000/locations/by-name/${trimmedQuery}`);
      if (!res.ok) throw new Error("Аудитория не найдена");
      const data = await res.json();

      if (!data || !data.name) {
        alert("Аудитория не найдена в базе");
        return;
      }

      onFound(data); // передаём найденный объект в App
    } catch (err) {
      console.error(err);
      alert("Ошибка при поиске аудитории");
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Номер аудитории"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "6px", fontSize: "14px", flex: "1" }}
      />
      <button type="submit">Найти</button>
    </form>
  );
};

export default SearchBar;
