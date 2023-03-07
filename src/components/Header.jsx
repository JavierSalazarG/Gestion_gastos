import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPres,
  setIsValidPres,
}) => {
  return (
    <header>
      <h1>Gestion de gastos</h1>

      {isValidPres ? (
        <ControlPresupuesto presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPres={setIsValidPres}
          isValidPres={isValidPres}
        />
      )}
    </header>
  );
};

export default Header;
