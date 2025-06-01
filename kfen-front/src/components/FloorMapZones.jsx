import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useRef, useState, useEffect } from "react";
import Floor7 from "./Floors/Floor7";
import Floor6 from "./Floors/Floor6";
import Floor5 from "./Floors/Floor5";
import Floor4 from "./Floors/Floor4";
import Floor3 from "./Floors/Floor3";
import Floor2 from "./Floors/Floor2";
import Floor1 from "./Floors/Floor1";


const FloorMapZones = ({ floor, selected, onSelect }) => {
  const selectedZoneId = selected?.name;
  const transformRef = useRef(null);

  const handleSelect = async (zoneId) => {
    try {
    const response = await fetch(`http://localhost:8000/locations/search/${zoneId}`);

    //   const response = await fetch(`https://9249-147-45-42-42.ngrok-free.app/locations/search/${zoneId}`, {
    //   headers: {
    //     "ngrok-skip-browser-warning": "true"
    //   }
    // });

      if (!response.ok) throw new Error("Не удалось получить данные");
      const data = await response.json();
      console.log("Полученные данные:", data);
      onSelect(data);

    } catch (error) {
      console.error("Ошибка при получении зоны:", error);
      onSelect(null);
    }
  };

  useEffect(() => {
    if (!selected?.name) return;

    setTimeout(() => {
      const svgElement = document.getElementById(selected.name);
      if (svgElement && transformRef.current) {
        transformRef.current.zoomToElement(svgElement, 3);
      }
    }, 200);
  }, [selected]);

  const renderFloor = () => {
    if (floor === 1) return <Floor1 onSelect={handleSelect} selectedId={selectedZoneId}/>;
    if (floor === 2) return <Floor2 onSelect={handleSelect} selectedId={selectedZoneId}/>;
    if (floor === 3) return <Floor3 onSelect={handleSelect} selectedId={selectedZoneId}/>;
    if (floor === 4) return <Floor4 onSelect={handleSelect} selectedId={selectedZoneId}/>;
    if (floor === 5) return <Floor5 onSelect={handleSelect} selectedId={selectedZoneId}/>;
    if (floor === 6) return <Floor6 onSelect={handleSelect} selectedId={selectedZoneId}/>;
    if (floor === 7) return <Floor7 onSelect={handleSelect} selectedId={selectedZoneId}/>;

    return null;
  };

  return (
    <div className="map-area" style={{ width: "100%", height: "100%" }}>
      <TransformWrapper
        ref={transformRef}
        options={{
          maxScale: 3,
          minScale: 0.5,
          limitToBounds: false,
        }}
        pan={{ velocityDisabled: true }}
        pinch={{ step: 2 }}
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
