const LocationList = ({ locations }) => (
    <div className="space-y-2">
      {locations.length === 0 && (
        <p className="text-center text-gray-500">Ничего не найдено</p>
      )}
      {locations.map(loc => (
        <div key={loc.id} className="border rounded p-2 shadow bg-white">
          <p className="font-semibold">{loc.name} — {loc.type}</p>
          {loc.description && <p className="text-sm text-gray-600">{loc.description}</p>}
        </div>
      ))}
    </div>
  );

  export default LocationList;