import {  useReducer, useRef } from "react"
import { tareasInitialState, tareasReducer } from "../reducers/tareasReducer"
import { TYPES } from "../actions/tareasActions";
import { v4 as uuidv4 } from 'uuid';
import Tareas from "./Tareas";


const ListaTareas = () => {

    const inputRef = useRef();

    const [tareas, dispatch] = useReducer(tareasReducer, tareasInitialState)

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({
            type: TYPES.AGREGAR,
            title: inputRef.current.value,
            id: uuidv4(),
            done: false
        });
        inputRef.current.value= ''
        
    }




    return (
        <div>
            <h1>Lista de tareas</h1>
            <form onSubmit={handleSubmit}>
                <label>Tarea</label>
                <input type="text" name="title" ref={inputRef} placeholder="Escribre una tarea.." />
                <input type="submit" value="Enviar" />
            </form>
            <Tareas tareas={tareas} dispatch = {dispatch}/>

        </div>
    )
}

export default ListaTareas