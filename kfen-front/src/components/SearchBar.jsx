const SearchBar = ({ query, setQuery }) => (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Поиск по названию или номеру..."
      className="w-full p-2 border rounded mb-2"
    />
  );
export default SearchBar;  