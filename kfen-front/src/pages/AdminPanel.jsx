import { useEffect, useState } from "react";
import EditModal from "../components/EditModal";
import Login from "./Login";
import { basicAuthHeader } from "../../auth";


const API_URL = "http://185.42.165.142/api";

const AdminPage = () => {
  const [editingLocation, setEditingLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [form, setForm] = useState({ name: "", type: "", description: "", floor: 1 });
  const [search, setSearch] = useState("");
  const [auth, setAuth] = useState(null);

  const basicAuthHeader = () => {
    const encoded = btoa(`${auth.username}:${auth.password}`);
    return { Authorization: `Basic ${encoded}` };
  };

  useEffect(() => {
    if (!auth) return;
    fetch(`${API_URL}/admin/locations`, {
      headers: {...basicAuthHeader(),}
    })
      .then((res) => {
        if (!res.ok) throw new Error("Auth failed");
        return res.json();
      })
      .then(setLocations)
      .catch(() => setAuth(null));
  }, [auth]);

  if (!auth) return <Login onLogin={setAuth} />;

  const handleInputChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/admin/locations/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...basicAuthHeader() },
        body: JSON.stringify(form),
      });
      const newLoc = await res.json();
      setLocations((prev) => [...prev, newLoc]);
      setForm({ name: "", description: "", floor: 1 });
    } catch (error) {
      console.error("Ошибка при добавлении:", error);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      const res = await fetch(`${API_URL}/admin/locations/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...basicAuthHeader() },
        body: JSON.stringify(data),
      });
      const updated = await res.json();
      setLocations((prev) =>
        prev.map((loc) => (loc.id === id ? updated : loc))
      );
      setEditingLocation(null);
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };

  const handleDelete = async (id) => {
  if (!window.confirm("Удалить эту локацию?")) return;

  try {
    await fetch(`${API_URL}/admin/locations/${id}`, {
      method: "DELETE",
      headers: {
        ...basicAuthHeader(),
      },
    });
    setLocations((prev) => prev.filter((loc) => loc.id !== id));
  } catch (error) {
    console.error("Ошибка при удалении:", error);
    alert("Не удалось удалить локацию");
  }
};


  const filteredLocations = locations.filter(loc =>
    (loc.name?.toLowerCase() || "").includes(search.toLowerCase()) ||
    (loc.description?.toLowerCase() || "").includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Админка: Локации</h2>

      <form onSubmit={handleAdd} style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Название"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="type"
          value={form.type}
          placeholder="Тип"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          value={form.description}
          placeholder="Описание"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="floor"
          value={form.floor}
          placeholder="Этаж"
          onChange={handleInputChange}
        />
        <button type="submit">Добавить</button>
      </form>

      <input
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
      />

      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Этаж</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {filteredLocations.map((loc) => (
            <tr key={loc.id}>
              <td>{loc.id}</td>
              <td>{loc.name}</td>
              <td>{loc.description}</td>
              <td>{loc.floor}</td>
              <td>
                <button onClick={() => setEditingLocation(loc)}>✏️ Редактировать</button>
                <button onClick={() => handleDelete(loc.id)}>🗑️ Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingLocation && (
  <EditModal
    location={editingLocation}
    onClose={() => setEditingLocation(null)}
    onSave={(data) => handleUpdate(editingLocation.id, data)}
  />
)}
    </div>
  );
};

export default AdminPage;
