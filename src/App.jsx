import "./App.css"
import Task from "./components/Task/Task"
import CreateForm from "./components/CreateForm/CreateForm"
import { useState } from "react"
const datos = [
  {
    id: crypto.randomUUID(),
    complete: true,
    information: "Cocinar",
    date: Date.now(),
    category: "Cocina",
  },
  {
    id: crypto.randomUUID(),
    complete: false,
    information: "Limpiar",
    date: Date.now(),
    category: "Limpieza",
  },
]

function App() {
  const [tareas, setTareas] = useState(datos)

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

  return (
    <div>
      <CreateForm crearTarea={crearTarea} />
      <div className="task-card">
        {tareas.map((task) => (
          <Task
            key={task.id}
            task={task}
            eliminarTarea={eliminarTarea}
            completado={completado}
          />
        ))}
      </div>
    </div>
  )
}

export default App
