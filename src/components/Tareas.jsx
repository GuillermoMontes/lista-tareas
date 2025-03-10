
import { TYPES } from '../actions/tareasActions';

const Tareas = ({ tareas, dispatch }) => {
    return (
        <>
            { tareas.map((tarea) => (
                <div key={tarea.id}>
                    <p>{tarea.title}</p>
                    <button onClick={() => dispatch({ type: TYPES.ELIMINAR, payload: tarea.id })}>Eliminar</button>
                    <button onClick={() => dispatch({ type: TYPES.COMPLETADA, payload: tarea.id })}>Completada</button>
                </div>
                
            ))}

            
        </>
    )
}

export default Tareas