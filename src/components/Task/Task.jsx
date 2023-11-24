/* eslint-disable react/prop-types */
import Button from "../Button/Button"
import "./Task.css"

const Task = ({ task, eliminarTarea }) => {
  const { id, complete, date, information, category } = task

  return (
    <div className="task-container">
      <div className="task-container_completed">
        Completado: {complete ? "Si" : "No"}
      </div>
      <div className="task-container_information">
        Information: {information}
      </div>
      <div className="task-container_date">Fecha: {date}</div>
      <div className="task-container_category">Categoria: {category}</div>
      <div>
        <Button
          title={"Eliminar tarea"}
          handleClick={() => eliminarTarea(id)}
        />
      </div>
    </div>
  )
}

export default Task
