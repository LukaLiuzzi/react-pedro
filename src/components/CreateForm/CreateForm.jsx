/* eslint-disable react/prop-types */
import { useState } from "react"
import "./CreateForm.css"
import Button from "../Button/Button"

const CreateForm = (props) => {
  const {
    crearTarea,
    editando = false,
    tarea,
    editarTarea,
    cambiarEditando,
  } = props
  const [information, setInformation] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editando) {
      editarTarea(tarea.id, { information, category })
      cambiarEditando(false)
    } else {
      crearTarea({ information, category })
    }

    e.target.reset()
  }

  return (
    <div className="form">
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="form_information">
          <label>Informacion</label>
          <input
            className="form_information-field"
            type="text"
            onChange={(e) => setInformation(e.target.value)}
            defaultValue={editando ? tarea.information : ""}
          />
        </div>
        <div className="form_category">
          <label> Categoria</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled selected>
              Selecciona una categoria
            </option>
            <option value="cocina">Cocina</option>
            <option value="compras">Compras</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <Button title={editando ? "Editar tarea" : "Crear tarea"} />
        </div>
      </form>
    </div>
  )
}

export default CreateForm
