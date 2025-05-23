const FloorSelector = ({ currentFloor, onChange }) => {
  return (
    <div className="floor-selector">
      <button onClick={() => onChange(1)} disabled={currentFloor === 1}>
        1
      </button>
      <button onClick={() => onChange(2)} disabled={currentFloor === 2}>
        2
      </button>
      <button onClick={() => onChange(3)} disabled={currentFloor === 3}>
        3
      </button>
      <button onClick={() => onChange(4)} disabled={currentFloor === 4}>
        4
      </button>
      <button onClick={() => onChange(5)} disabled={currentFloor === 5}>
        5
      </button>
      <button onClick={() => onChange(6)} disabled={currentFloor === 6}>
        6
      </button>
      <button onClick={() => onChange(7)} disabled={currentFloor === 7}>
        7
      </button>
    </div>
  );
};

export default FloorSelector;