import { useState } from "react";

const SearchBar = ({ onFound }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    try {
      const res = await fetch(`http://185.42.165.142/api/locations/search/${encodeURIComponent(trimmedQuery)}`);
    //   const res = await fetch(`https://9249-147-45-42-42.ngrok-free.app/locations/search/${encodeURIComponent(trimmedQuery)}`, {
    //   headers: {
    //     "ngrok-skip-browser-warning": "true"
    //   }
    // });
      if (!res.ok) throw new Error("Аудитория не найдена");
      const data = await res.json();

      if (!data || !data.name) {
        alert("Аудитория не найдена в базе");
        return;
      }

      onFound(trimmedQuery);
    } catch (err) {
      console.error(err);
      alert("Ошибка при поиске аудитории");
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ display: "flex", gap: "3%"}}>
      <input
        type="text"
        placeholder="Номер аудитории"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ paddingLeft: "3%", fontSize: "14px", flex: "1" }}
      />
      <button type="submit">🔎︎</button>
    </form>
  );
};

export default SearchBar;
