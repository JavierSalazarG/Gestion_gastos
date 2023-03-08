import React, { useState } from "react";
import CerrarBtn from "../assets/img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>

      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
            placeholder="Nombre de Gasto"
            id="nombre"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            placeholder="Cantidad Gastada"
            id="cantidad"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=""> -- Seleccionnar --</option>
            <option value="ahorro"> Ahorro</option>
            <option value="mascotas"> Mascotas</option>
            <option value="comida"> Comida</option>
            <option value="suscripciones"> Suscripciones</option>
            <option value="salud"> Salud</option>
            <option value="transporte"> Transporte</option>
            <option value="hogar"> Hogar</option>
            <option value="ocio"> Ocio</option>
          </select>
        </div>
        <input type="submit" value="Incluir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
