import { useState, useEffect } from "react";
import FloorMapZones from "./components/FloorMapZones";
import FloorSelector from "./components/FloorSelector";
import SearchBar from "./components/SearchBar";
import SideMenu from "./components/SideMenu";
import "./index.css";
import "./components/SideMenu.css";


function App() {
  const [floor, setFloor] = useState(4);
  const [selected, setSelected] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleSearchResult = async (query) => {
    try {
      const res = await fetch(`http://localhost:8000/locations/search/${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Не найдено");
      const data = await res.json();
      setSelected(data);
    } catch (err) {
      console.error("Ошибка при поиске:", err);
      alert("Не удалось найти локацию");
    }
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
    {isMenuOpen && (
      <div
        className="overlay"
        onClick={() => setMenuOpen(false)}
      ></div>
    )}
      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        onSelectLocation={(name) => {
          handleSearchResult(name);
          setMenuOpen(false);
        }}
      />
      <div className="top-bar">
        <div className="top-row">
          <button className="menu-button" onClick={() => setMenuOpen(true)}>☰</button>
          <div className="search-wrapper">
            <SearchBar onFound={handleSearchResult} />
          </div>
        </div>
        <FloorSelector currentFloor={floor} onChange={setFloor} />
      </div>
      <div>
      </div>
      <FloorMapZones floor={floor} onSelect={setSelected} selected={selected}/>     
    </div>
  );
}

export default App;
