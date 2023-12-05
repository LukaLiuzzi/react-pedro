import { useRef } from "react"

const Ref = () => {
  // document.querySelector("selector")
  const divRef = useRef(null)

  const handleClick = () => {
    divRef.current.innerHTML = "Nuevo contenido"
  }

  return (
    <div>
      <div ref={divRef}>Contenido</div>
      <button onClick={handleClick}>Cambiar contenido</button>
    </div>
  )
}

export default Ref
