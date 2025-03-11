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
    <div className="grid justify-center h-screen text-slate-100">
      <div className="content-center">

      <h1 className="text-center text-3xl m-8">Lista de tareas</h1>
      <div className="flex justify-between my-6">
        <h3 className="text-cyan-600 border-b-3  border-cyan-600 ">N° Tareas: {contadorTareas}</h3>
        <h3 className="text-orange-400 border-b-3  border-orange-600">Pendientes: {tareasPendientes}</h3>
      </div>
      <form onSubmit={handleSubmit} className="text-lg">
        <label className="mr-2">Tarea:</label>
        <input
          className="bg-slate-200 text-slate-700 rounded-lg px-2"
          type="text"
          name="title"
          ref={inputRef}
          placeholder="Escribre una tarea.."
        />
        <input 
          className="bg-sky-900 p-0.5 border-2 border-sky-700 ml-2 cursor-pointer rounded-lg"
          type="submit"
          value="Agregar"
           />
      </form>
      <Tareas tareas={tareas} dispatch={dispatch} />

      </div>
    </div>
  );
};

export default ListaTareas;
