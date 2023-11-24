/* eslint-disable react/prop-types */
import { useState } from "react"
import "./CreateForm.css"
import Button from "../Button/Button"

const CreateForm = (props) => {
  const { crearTarea } = props
  const [information, setInformation] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    crearTarea({ information, category })

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
          />
        </div>
        <div className="form_category">
          <label> Categoria</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>
              Selecciona una categoria
            </option>
            <option value="cocina">Cocina</option>
            <option value="compras">Compras</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <Button title={"Crear tarea"} />
        </div>
      </form>
    </div>
  )
}

export default CreateForm
