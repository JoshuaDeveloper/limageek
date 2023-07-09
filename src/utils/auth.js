import axios from "axios";

const API_URL = "http://52.70.141.181:8080"; // Reemplaza con la URL de tu API

export async function login(username, password) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username: username,
      password: password,
    });
    return true;
  } catch (error) {
    return null;
  }
}

export async function register({
  username,
  password,
  nombre,
  apellidos,
  direccion,
  numeroTelefono,
  correoElectronico,
  fechaNacimiento,
  tipoUsuario,
}) {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username: username,
      password: password,
      nombre: nombre,
      apellidos: apellidos,
      direccion: direccion,
      numeroTelefono: numeroTelefono,
      correoElectronico: correoElectronico,
    });
    return true;
  } catch (error) {
    return null;
  }
}
