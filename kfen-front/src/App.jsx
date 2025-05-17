import { useState, useEffect } from "react";
import FloorMapZones from "./components/FloorMapZones";
import "./index.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const result = locations.filter((loc) =>
      loc.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  }, [query, locations]);

  return (
    <div className="app-container">
      <div className="top-bar">
        <button>☰</button>
        <input
          type="text"
          placeholder="Поиск по КФЕН..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <FloorMapZones locations={filtered} onSelect={setSelected} />     
    </div>
  );
}

export default App;
