import { useState } from "react";
import "./SideMenu.css";

const institutes = {
  ИМИ: ["Директор ИМИ", "Кафедра ИТ", "Кафедра ВТ", "Кафедра ТМОМИ", "Кафедра ВМ", "Кафедра МЭПИ", "Кафедра АГМАДУ", "Кафедра ИБТС", "УМО ИМИ"],
  ФТИ: ["Директор ФТИ", "Кафедра МПФ", "Кафедра РЭС", "Кафедра ОЭФ", "Кафедра ТиТ", "Кафедра ТОДКМ", "УМО ФТИ"],
  ИЕН: ["Директор ИЕН", "Биологическое отделение", "Педагогическое отделение", "Химическое отделение", "Эко-гео отделение", "УМО ИЕН"],
  ИЗФиР: ["Кафедра ИЯТЕС", "УМО ИЗФиР"],
  ИФКиС: ["Кафедра СПДТ", "Большой спортзал", "Малый спортзал"],
  Интересное: ["Столовая", "Буфет", "Вахта", "Гардероб", "Инсектарий СВФУ", "Студия Jalinga", "Музей зоологии", "Точка кипения"],
};

const SideMenu = ({ isOpen, onClose, onSelectLocation }) => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (name) => {
    setExpanded(expanded === name ? null : name);
  };

  const handleClick = (loc) => {
    onSelectLocation(loc); // вызывает поиск
    onClose();             // закрывает меню
  };

  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <h2>KFENmap</h2>
      <img className="logo" src="icon.jpg" />
      <h3>Институты</h3>
      {Object.entries(institutes).map(([name, locations]) => (
        <div key={name}>
          <button className="institute-btn" onClick={() => toggle(name)}>
            {name}
          </button>
          {expanded === name && (
            <ul className="submenu">
              {locations.map((loc) => (
                <li key={loc} onClick={() => handleClick(loc)}>
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
