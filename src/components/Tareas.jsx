
import { TYPES } from '../actions/tareasActions';
import { FaTrashAlt } from "react-icons/fa";
import { MdPlaylistAddCheckCircle } from "react-icons/md";


const Tareas = ({ tareas, dispatch }) => {
    return (
        <>
            { tareas.map((tarea) => (
                <div key={tarea.id} className={tarea.done?`border border-green-600/50 rounded-2xl my-6 p-2 shadow-md shadow-green-600/50 line-through`: `border border-orange-600/50 rounded-2xl my-6 p-2 shadow-md shadow-orange-600/50 `}>
                    <p className='text-center m-4 p-1'>{tarea.title}</p>
                    <div className='flex justify-around'>
                        <button className='text-2xl cursor-pointer' onClick={() => dispatch({ type: TYPES.COMPLETADA, payload: tarea.id })}><MdPlaylistAddCheckCircle /></button>
                        <button className='text-xl cursor-pointer' onClick={() => dispatch({ type: TYPES.ELIMINAR, payload: tarea.id })}><FaTrashAlt /></button>

                    </div>
                </div>
                
            ))}

            
        </>
    )
}

export default Tareas