import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useState } from "react";
import Floor4 from "./Floor4";
import Floor3 from "./Floor3";

const FloorMapZones = ({ floor, selected, onSelect }) => {
  const selectedZoneId = selected?.name;

  const handleSelect = async (zoneId) => {
    try {
      const response = await fetch(`http://localhost:8000/locations/by-name/${zoneId}`);
      if (!response.ok) throw new Error("Не удалось получить данные");
      const data = await response.json();
      console.log("Полученные данные:", data);
      onSelect(data);
    } catch (error) {
      console.error("Ошибка при получении зоны:", error);
      onSelect(null);
    }
  };

  const renderFloor = () => {
    if (floor === 3) return <Floor3 onSelect={handleSelect} selectedId={selectedZoneId}/>;
    if (floor === 4) return <Floor4 onSelect={handleSelect} selectedId={selectedZoneId}/>;
    return null;
  };

  return (
    <div className="map-area" style={{ width: "100%", height: "100%" }}>
      <TransformWrapper
        options={{
          maxScale: 3,
          minScale: 0.5,
          limitToBounds: false,
        }}
        pan={{ velocityDisabled: true }}
        pinch={{ step: 5 }}
        doubleClick={{ disabled: true }}
      >
        <TransformComponent
          wrapperStyle={{ width: "100%", height: "100%" }}
          contentStyle={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <img
            src={`/floor${floor}.jpg`}
            alt={`Карта ${floor} этажа`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            {renderFloor()}

          </div>
        </TransformComponent>
      </TransformWrapper>
      <div className="bottom-info">
        {selected?.name ? (
          <div>
            <h3>{selected.name}</h3>
            <p>{selected.description}</p>
          </div>
        ) : (
          <p>Нажмите на кабинет на карте, чтобы узнать больше</p>
        )}
      </div>
    </div>
  );
};

export default FloorMapZones;
