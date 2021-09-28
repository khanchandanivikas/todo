import React from "react";
import "../style//InputLista.css";
import { useState } from "react";
import ListaTareas from "./ListaTareas";
import { v4 as uuidv4 } from "uuid";

const InputLista = (props) => {
  const tareasNuevos = props.tareas;
  const tareaEliminar = props.eliminarTarea;
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoFecha, setNuevoFecha] = useState("");
  const [nuevoTipo, setNuevoTipo] = useState("");
  const [nuevoPrioridad, setNuevoPrioridad] = useState("");

  const handleNuevoNombre = (e) => {
    setNuevoNombre(e.target.value);
  };
  const handleNuevoFecha = (e) => {
    setNuevoFecha(e.target.value);
  };
  const handleNuevoTipo = (e) => {
    setNuevoTipo(e.target.value);
  };
  const handleNuevoPrioridad = (e) => {
    setNuevoPrioridad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.añadirTarea({
      id: uuidv4(),
      nombre: nuevoNombre,
      fecha: nuevoFecha,
      tipo: nuevoTipo,
      prioridad: nuevoPrioridad,
    });
    setNuevoNombre("");
    setNuevoFecha("");
    setNuevoTipo("");
    setNuevoPrioridad("");
  };

  const [nuevoNombreModificar, setNuevoNombreModificar] = useState("");
  const handleNuevoNombreModificar = (e) => {
    setNuevoNombreModificar(e.target.value);
  };
  const [nuevoModificarTipo, setNuevoModificarTipo] = useState("");
  const handleNuevoModificarTipo = (e) => {
    setNuevoModificarTipo(e.target.value);
  };
  const [nombreModificado, setNombreModificado] = useState("");
  const handleNombreModificado = (e) => {
    setNombreModificado(e.target.value);
  };
  const handleModificadoSubmit = (e) => {
    e.preventDefault();
    props.modificarTarea(
      nuevoNombreModificar,
      nuevoModificarTipo,
      nombreModificado
    );
    setNuevoNombreModificar("");
    setNuevoTipo("");
    setNombreModificado("");
  };
  return (
    <div>
      <h1>TODO</h1>
      <form action="" onSubmit={handleSubmit} className="formulario">
        <input
          onChange={handleNuevoNombre}
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Input tarea aqui"
          value={nuevoNombre}
          required
        />
        <input
          onChange={handleNuevoFecha}
          type="date"
          name="fecha"
          id="fecha"
          placeholder="Input fecha aqui"
          value={nuevoFecha}
          required
        />
        <select
          onChange={handleNuevoTipo}
          name="tipo"
          id="tipo"
          value={nuevoTipo}
          placeholder="elegir tipo aqui"
          required
        >
          <option value="" defaultValue>Elegir el tipo</option>
          <option value="personal">personal</option>
          <option value="trabajo">trabajo</option>
          <option value="ocio">ocio</option>
        </select>
        <select
          onChange={handleNuevoPrioridad}
          name="prioridad"
          id="prioridad"
          value={nuevoPrioridad}
          placeholder="elegir prioridad aqui"
          required
        >
          <option value="" defaultValue>Elegir la prioridad</option>
          <option value="alta">alta</option>
          <option value="media">media</option>
          <option value="baja">baja</option>
        </select>
        <button>Añadir</button>
      </form>

      {/* modificar formulario */}
      <form action="" onSubmit={handleModificadoSubmit}>
        <input
          onChange={handleNuevoNombreModificar}
          type="text"
          name="nombreModificar"
          id="nombreModificar"
          value={nuevoNombreModificar}
          placeholder="Nombre de tarea a modificar"
          required
        />
        <select
          onChange={handleNuevoModificarTipo}
          name="tipoModificar"
          id="tipoModificar"
          value={nuevoModificarTipo}
          required
        >
          <option value="">Elegir propeidad a cambiar</option>
          <option value="fecha">fecha</option>
          <option value="tipo">tipo</option>
          <option value="prioridad">prioridad</option>
        </select>
        <input
          onChange={handleNombreModificado}
          type="text"
          name="nuevoValor"
          id="nuevoValor"
          value={nombreModificado}
          placeholder="tarea modificado"
          required
        />
        <br />
        <button type="submit">Modificar</button>
      </form>
      <h2>Lista Tareas</h2>
      <ListaTareas
        key={tareasNuevos.nombre}
        tareasNuevos={tareasNuevos}
        tareaEliminar={tareaEliminar}
      />
    </div>
  );
};

export default InputLista;
