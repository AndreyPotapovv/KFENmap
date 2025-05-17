const FilterButtons = ({ setFilterType }) => {
    return (
      <div className="flex justify-center space-x-2 mb-4">
        {["all", "аудитория", "туалет", "лестница"].map(type => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            {type === "all" ? "Все" : type[0].toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    );
  };
  
  export default FilterButtons;  