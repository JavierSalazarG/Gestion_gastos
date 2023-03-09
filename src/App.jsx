import React, { useState } from "react";
import Header from "./components/Header";
import { GenerarId } from "./helpers";
import LogoNuevoGasto from "./assets/img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPres, setIsValidPres] = useState();
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 200);
  };

  const guardarGastos = (gasto) => {
    gasto.id = GenerarId();
    setGastos([...gastos, gasto]);
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  return (
    <React.Fragment>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPres={isValidPres}
        setIsValidPres={setIsValidPres}
      />
      {isValidPres && (
        <div className="nuevo-gasto">
          <img
            src={LogoNuevoGasto}
            alt="Nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGastos={guardarGastos}
        />
      )}
    </React.Fragment>
  );
}

export default App;
