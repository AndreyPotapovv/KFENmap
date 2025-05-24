const FloorSelector = ({ currentFloor, onChange }) => {
  const floors = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="floor-selector-horizontal">
      {floors.map((floor) => (
        <button
          key={floor}
          onClick={() => onChange(floor)}
          className={floor === currentFloor ? "active" : ""}
        >
          {floor}
        </button>
      ))}
    </div>
  );
};

export default FloorSelector;
