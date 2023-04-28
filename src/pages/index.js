import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <body lang="en">
      <div className="flex flex-col p-10">
        <span className="text-[20px] font-bold">Crea tu usuario</span>
        {/* MODE 1 */}
        <div className="mt-4 flex flex-col">
          Nombre
          <input placeholder="Escribe tu nombre" />
        </div>
        {/* MODE 2 */}
        <span className="mt-4" htmlFor="lastName">
          Apellidos
        </span>
        <input id="lastName" />
        {/* SELECT */}
        <div className="mt-4 flex flex-col">
          Género
          <select placeholder="Escribe tu nombre">
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>
        {/* CHECKBOX */}
        <label className="mt-4">
          Vivo en la CDMX
          <input type="checkbox" className="ml-2" />
        </label>
        <span disabled={loading} onClick={() => setLoading(true)}>
          {loading ? "Cargando..." : "Aceptar"}
        </span>
      </div>
    </body>
  );
}
