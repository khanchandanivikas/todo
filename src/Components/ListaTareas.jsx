import React from "react";
import ElementoTareas from "./ElementoTareas";

function ElementLista(props) {
  const eliminarTarea = props.tareaEliminar;
  localStorage.setItem("tareas", JSON.stringify([...props.tareasNuevos]));
  return (
    <div>
      {props.tareasNuevos.map((element) => {
        return (
          <ElementoTareas
            key={element.id}
            element={element}
            eliminarTarea={eliminarTarea}
          />
        );
      })}
    </div>
  );
}

export default ElementLista;
