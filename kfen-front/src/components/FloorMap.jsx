const FloorMapZones = ({ locations, onSelect }) => {
  return (
    <div className="map-area">
      <img
        src="/floor4.jpg"
        alt="Карта 4 этажа"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />

      {locations.map((zone) => (
        <div
          key={zone.id}
          className="zone"
          style={{
            left: `${zone.x}%`,
            top: `${zone.y}%`,
            width: `${zone.width}%`,
            height: `${zone.height}%`,
          }}
          title={zone.name}
          onClick={() => onSelect(zone)}
        />
      ))}
    </div>
  );
};

export default FloorMapZones;
