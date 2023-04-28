import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <body lang="es">
      <main className="flex flex-col p-10">
        <h1 className="text-[20px] font-bold">Crea tu usuario</h1>
        {/* MODE 1 */}
        <label className="mt-4 flex flex-col">
          Nombre
          <input placeholder="Escribe tu nombre" />
        </label>
        {/* MODE 2 */}
        <label className="mt-4" htmlFor="lastName">
          Apellidos
        </label>
        <input id="lastName" />
        {/* SELECT */}
        <label className="mt-4 flex flex-col">
          Género
          <select placeholder="Escribe tu nombre">
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </label>
        {/* CHECKBOX */}
        <label className="mt-4" aria-label="Vivo en la Ciudad de México">
          Vivo en la CDMX
          <input type="checkbox" className="ml-2" />
        </label>
        <button
          type="button"
          aria-label="Crear usuario"
          className="mt-4"
          disabled={loading}
          aria-busy={loading}
          aria-live="polite"
          onClick={() => setLoading(true)}
        >
          {loading ? "Cargando..." : "Aceptar"}
        </button>
      </main>
    </body>
  );
}
