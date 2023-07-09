"use client";
import React, { useState } from "react";
import { register } from "../../utils/auth";
function ModalCreateUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [newUsuario, setNewUsuario] = useState({
    nombre: "",
    apellidos: "",
    correoElectronico: "",
    contrasena: "",
    correoValidado: true,
    usuario: "",
    direccion: "",
    numeroTelefono: "",
    id: 0,
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userSaved = await register(newUsuario);
  };
  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Registrarse
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal-container bg-white p-4 rounded-xl">
            <div className="modal-content ">
              <div className="flex justify-center">
                <h2 className="text-xl font-bold mb-4 text-black">
                  Registrarse
                </h2>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full p-2 border border-gray-300 rounded text-gray-950"
                  placeholder="Ingresa tu nombre"
                  value={newUsuario.nombre}
                  onChange={(e) =>
                    setNewUsuario({ ...newUsuario, nombre: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="apellidos"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Apellidos
                </label>
                <input
                  type="text"
                  id="apellidos"
                  className="w-full p-2 border border-gray-300 rounded text-gray-950"
                  placeholder="Ingresa tus apellidos"
                  value={newUsuario.apellidos}
                  onChange={(e) =>
                    setNewUsuario({ ...newUsuario, apellidos: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="correoElectronico"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correoElectronico"
                  className="w-full p-2 border border-gray-300 rounded text-gray-950"
                  placeholder="Ingresa tu correo electrónico"
                  value={newUsuario.correoElectronico}
                  onChange={(e) =>
                    setNewUsuario({
                      ...newUsuario,
                      correoElectronico: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="contrasena"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="contrasena"
                  className="w-full p-2 border border-gray-300 rounded text-gray-950"
                  placeholder="Ingresa tu contraseña"
                  value={newUsuario.contrasena}
                  onChange={(e) =>
                    setNewUsuario({
                      ...newUsuario,
                      contrasena: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="usuario"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  id="usuario"
                  className="w-full p-2 border border-gray-300 rounded text-gray-950"
                  placeholder="Ingresa tu usuario"
                  value={newUsuario.usuario}
                  onChange={(e) =>
                    setNewUsuario({ ...newUsuario, usuario: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="direccion"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Dirección
                </label>
                <input
                  type="text"
                  id="direccion"
                  className="w-full p-2 border border-gray-300 rounded text-gray-950"
                  placeholder="Ingresa tu dirección"
                  value={newUsuario.direccion}
                  onChange={(e) =>
                    setNewUsuario({ ...newUsuario, direccion: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="numeroTelefono"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Número de teléfono
                </label>
                <input
                  type="text"
                  id="numeroTelefono"
                  className="w-full p-2 border border-gray-300 rounded text-gray-950"
                  placeholder="Ingresa tu número de teléfono"
                  value={newUsuario.numeroTelefono}
                  onChange={(e) =>
                    setNewUsuario({
                      ...newUsuario,
                      numeroTelefono: e.target.value,
                    })
                  }
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-1"
                >
                  Guardar
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-1"
                >
                  Cerrar Modal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalCreateUser;
