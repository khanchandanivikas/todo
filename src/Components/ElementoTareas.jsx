import React from "react";
import "../style/ElementoTareas.css";
import { useState } from "react";

const ElementoTareas = (props) => {
  const [complete, setComplete] = useState(false);
  const handleComplete = () => {
    setComplete(true);
  };
  const handleIncomplete = () => {
    setComplete(false);
  };
  const [nuevoEliminar, setNuevoEliminar] = useState(props.element.nombre);
  const handleNuevoEliminar = () => {
    setNuevoEliminar(props.element.nombre);
  };
  const handleEliminar = (e) => {
    e.preventDefault();
    props.eliminarTarea(nuevoEliminar);
  };
  return (
    <div className="listas">
      <p className={complete ? "completo" : "incompleto"}>
        Nombre: {props.element.nombre}
      </p>
      <p className={complete ? "completo" : "incompleto"}>
        Fecha: {props.element.fecha}
      </p>
      <p className={complete ? "completo" : "incompleto"}>
        Tipo: {props.element.tipo}
      </p>
      <p className={complete ? "completo" : "incompleto"}>
        Prioridad: {props.element.prioridad}
      </p>
      <button onClick={handleComplete}>
        <i className="fas fa-check-circle"></i>
      </button>
      <button onClick={handleIncomplete}>
        <i className="fas fa-times"></i>
      </button>
      <button
        type="submit"
        value={nuevoEliminar}
        onChange={handleNuevoEliminar}
        onClick={handleEliminar}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default ElementoTareas;
