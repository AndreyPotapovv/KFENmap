import { useState, useEffect } from "react";
import FloorMapZones from "./components/FloorMapZones";
import FloorSelector from "./components/FloorSelector";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const [floor, setFloor] = useState(4);
  const [selected, setSelected] = useState(null);
  const handleSearchResult = (loc) => {
    setSelected(loc);
  };

  useEffect(() => {
    if (selected?.floor && selected.floor !== floor) {
      setTimeout(() => {
      setFloor(selected.floor);
    }, 100)
  }
  }, [selected]);

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
