import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // FastAPI адрес
});

export const fetchLocations = async () => {
  const res = await api.get('/locations/');
  return res.data;
};

export const createLocation = async (location) => {
  const res = await api.post('/locations/', location);
  return res.data;
};
