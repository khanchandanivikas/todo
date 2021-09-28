import "./App.css";
import InputLista from "./Components/InputLista";
import { useState } from "react";

function App() {
  const list = JSON.parse(localStorage.getItem("tareas"));
  const [tareas, setTareas] = useState(list || []);
  
  const añadirTarea = (tarea) => {
    setTareas([...tareas, tarea]);
    localStorage.setItem("tareas", JSON.stringify([...tareas, tarea]));
  };

  const eliminarTarea = (nombreTarea) => {
    setTareas(
      tareas.filter((tarea) => {
        return tarea.nombre !== nombreTarea;
      })
    );
  };

  const modificarTarea = (nombreTarea, cual, nuevo) => {
    const tareaBuscado = tareas.filter((tarea) => {
      return tarea.nombre === nombreTarea;
    });
    tareaBuscado.forEach((element) => {
      switch (cual) {
        case "fecha":
          element.fecha = nuevo;
          break;
        case "tipo":
          element.tipo = nuevo;
          break;
        case "prioridad":
          element.prioridad = nuevo;
          break;
        default:
          console.log("error");
          break;
      }
    });
  };
  return (
    <div className="App">
      <InputLista
        key={tareas.nombre}
        tareas={tareas}
        añadirTarea={añadirTarea}
        eliminarTarea={eliminarTarea}
        modificarTarea={modificarTarea}
      />
    </div>
  );
}

export default App;
