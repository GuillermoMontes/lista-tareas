import { TYPES } from "../actions/tareasActions";
import { FaTrashAlt } from "react-icons/fa";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { motion,AnimatePresence} from "framer-motion";


const Tareas = ({ tareas, dispatch }) => {


  return (
    <>
       <AnimatePresence mode="">
      {tareas.map((tarea) => (
        
        <motion.div
          key={tarea.id}
          className={
            tarea.done
              ? `border border-green-600/50 rounded-2xl my-6 p-2 shadow-md shadow-green-600/50 line-through transition duration-500`
              : `border border-orange-600/50 rounded-2xl my-6 p-2 shadow-md shadow-orange-600/50 `
          }
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, type: "spring" }}
          exit={{
            opacity:0,
            scale:0
          }}
          layoutId={tarea.id}
  

        >
          <p className="text-center m-4 p-1">{tarea.title}</p>
          <div className="flex justify-around">
            <motion.button
              className="text-2xl cursor-pointer"
              onClick={() =>
                dispatch({ type: TYPES.COMPLETADA, payload: tarea.id })
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdPlaylistAddCheckCircle />
            </motion.button>
            <motion.button
              className="text-xl cursor-pointer"
              onClick={() =>
                dispatch({ type: TYPES.ELIMINAR, payload: tarea.id })
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTrashAlt />
            </motion.button>
          </div>
        </motion.div>
        
      ))}
      </AnimatePresence> 
    </>
  );
};

export default Tareas;
