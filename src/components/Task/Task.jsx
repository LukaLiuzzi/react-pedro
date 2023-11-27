/* eslint-disable react/prop-types */
import Button from "../Button/Button"
import "./Task.css"

const Task = ({ task, eliminarTarea, completado }) => {
  const { id, complete, date, information, category } = task

  return (
    <div className="task-container">
      <div className="task-container_completed">
        {complete ? "Completado" : "Pendiente"}
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
        <Button
          title={`${complete ? "Pendiente" : "Completado"}`}
          handleClick={() => completado(id)}
        />
      </div>
    </div>
  )
}

export default Task
