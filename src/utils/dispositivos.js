import axios from "axios";

const API_URL = "http://52.70.141.181:8080"; // Reemplaza con la URL de tu API

export async function getDispositivos() {
  try {
    const response = await axios.get(`${API_URL}/dispositivos`);
    return response.data;
  } catch (error) {
    return null;
  }
}
