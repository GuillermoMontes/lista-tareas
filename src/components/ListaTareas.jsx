import { useEffect, useReducer, useRef } from "react";
import { initTareas, tareasInitialState, tareasReducer } from "../reducers/tareasReducer";
import { TYPES } from "../actions/tareasActions";
import { v4 as uuidv4 } from "uuid";
import Tareas from "./Tareas";

const ListaTareas = () => {
  const inputRef = useRef();

  const [tareas, dispatch] = useReducer(tareasReducer, tareasInitialState,initTareas);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.length <= 1) return;

    dispatch({
      type: TYPES.AGREGAR,
      title: inputRef.current.value,
      id: uuidv4(),
      done: false,
    });
    inputRef.current.value = "";
  };

  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas))
  },[tareas])

  const contadorTareas = tareas.length
  const tareasPendientes = tareas.filter(tarea => !tarea.done).length

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <h3>N° Tareas: {contadorTareas}</h3>
        <h3>Pendientes: {tareasPendientes}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Tarea</label>
        <input
          type="text"
          name="title"
          ref={inputRef}
          placeholder="Escribre una tarea.."
        />
        <input type="submit" value="Agregar" />
      </form>
      <Tareas tareas={tareas} dispatch={dispatch} />
    </div>
  );
};

export default ListaTareas;
