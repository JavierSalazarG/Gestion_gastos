import React, { useState } from "react";
import Mensaje from "./mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  isValidPres,
  setIsValidPres,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto <= 0) {
      setMensaje("No es presupuesto valido");
      return;
    }
    setMensaje("");
    setIsValidPres(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Indique el presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
