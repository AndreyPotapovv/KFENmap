import { useState, useEffect } from "react";
import FloorMapZones from "./components/FloorMapZones";
import FloorSelector from "./components/FloorSelector";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const [floor, setFloor] = useState(4);
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const handleSearchResult = (loc) => {
    setSelected(loc);
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <FloorSelector currentFloor={floor} onChange={setFloor} />
        <button>☰</button>
        <SearchBar onFound={handleSearchResult}/>
      </div>

      <FloorMapZones floor={floor} onSelect={setSelected} selected={selected}/>     
    </div>
  );
}

export default App;
