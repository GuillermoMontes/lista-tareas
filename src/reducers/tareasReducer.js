
import { TYPES } from "../actions/tareasActions";


export const tareasInitialState = []

export function tareasReducer(state, action) {



    switch (action.type) {
        case TYPES.AGREGAR: {
            return [
                ...state, { id: action.id, title: action.title }
            ]
        }

        case TYPES.ELIMINAR: {
            return state.filter(tarea => tarea.id !== action.payload)
        }

        case TYPES.COMPLETADA: {
            return state.map(tarea => {

                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        done: !tarea.done,
                    }
                }
                return tarea;
            })
        }

        default:
            return tareasInitialState;

    }
    
}

