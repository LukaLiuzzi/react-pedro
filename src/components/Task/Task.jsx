/* eslint-disable react/prop-types */
import Button from "../Button/Button"
import "./Task.css"

const Task = ({ task, eliminarTarea, completado, editar }) => {
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
      <div className="button-container">
        <Button
          className="button-container_delete"
          title={"Eliminar tarea"}
          handleClick={() => eliminarTarea(id)}
        />
        <Button
          className="button-container_completado"
          title={`${complete ? "Pendiente" : "Completado"}`}
          handleClick={() => completado(id)}
        />
        <Button
          className="button-container_edit"
          title={"Editar tarea"}
          handleClick={() =>
            editar({
              id,
              complete,
              date,
              information,
              category,
            })
          }
        />
      </div>
    </div>
  )
}

export default Task
