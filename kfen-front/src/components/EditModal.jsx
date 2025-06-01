import React, { useState, useEffect } from "react";
import "./EditModal.css";

const EditModal = ({ location, onClose, onSave }) => {
  const [form, setForm] = useState({ name: "", description: "", floor: 1 });

  useEffect(() => {
    if (location) {
      setForm({
        name: location.name || "",
        description: location.description || "",
        floor: location.floor || 1,
      });
    }
  }, [location]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Редактировать локацию</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Название"
            required
          />
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Описание"
          />
          <input
            name="floor"
            type="number"
            value={form.floor}
            onChange={handleChange}
            placeholder="Этаж"
            required
          />
          <div className="modal-buttons">
            <button type="submit">Сохранить</button>
            <button type="button" onClick={onClose}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
