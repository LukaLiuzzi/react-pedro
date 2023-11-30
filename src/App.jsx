import "./App.css"
import Task from "./components/Task/Task"
import CreateForm from "./components/CreateForm/CreateForm"
import { useState } from "react"

function App() {
  const [tareas, setTareas] = useState([])
  const [editando, setEditando] = useState(false)
  const [tarea, setTarea] = useState({})

  const crearTarea = (nuevaTarea) => {
    setTareas([
      ...tareas,
      {
        ...nuevaTarea,
        date: Date.now(),
        complete: false,
        id: crypto.randomUUID(),
      },
    ])
  }

  const eliminarTarea = (id) => {
    const resultadoTareas = tareas.filter((tarea) => tarea.id != id)

    setTareas(resultadoTareas)
  }

  const completado = (id) => {
    const resultadoTareas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.complete = !tarea.complete
      }
      return tarea
    })

    setTareas(resultadoTareas)
  }

  const editarTarea = (id, tareaModificada) => {
    const nuevaTareas = tareas.map((tarea) =>
      tarea.id == id ? { ...tarea, ...tareaModificada } : tarea
    )
    setTareas(nuevaTareas)
  }

  const editar = (tarea) => {
    setEditando(true)
    setTarea(tarea)
  }

  const cambiarEditando = (bool) => {
    setEditando(bool)
  }

  return (
    <div>
      <CreateForm
        crearTarea={crearTarea}
        editando={editando}
        tarea={tarea}
        editarTarea={editarTarea}
        cambiarEditando={cambiarEditando}
      />
      <div className="task-card">
        {tareas.map((task) => (
          <Task
            key={task.id}
            task={task}
            eliminarTarea={eliminarTarea}
            completado={completado}
            editar={editar}
          />
        ))}
      </div>
    </div>
  )
}

export default App
