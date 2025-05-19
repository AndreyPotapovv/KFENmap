const FloorSelector = ({ currentFloor, onChange }) => {
  return (
    <div className="floor-selector">
      <button onClick={() => onChange(3)} disabled={currentFloor === 3}>
        3 этаж
      </button>
      <button onClick={() => onChange(4)} disabled={currentFloor === 4}>
        4 этаж
      </button>
    </div>
  );
};

export default FloorSelector;