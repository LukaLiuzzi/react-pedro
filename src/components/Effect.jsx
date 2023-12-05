import { useEffect, useState } from "react"

const Effect = () => {
  const [counter, setCounter] = useState(0)
  const [laps, setLaps] = useState(0)
  const [timeInSeconds, setTimeInSeconds] = useState(0)
  //   Sincronizacion useEffect
  //   useEffect(() => {}) => Con todos los estados
  //   useEffect(() => {}, []) => Con ningun estado. Solo se ejecuta una vez al montar el componente
  //   useEffect(() => {}, [estado1, estado2, estado3]) => Se va a ejecutar cuando cambie alguno de los estados

  useEffect(() => {
    console.log(`El valor del contador es ${counter}`)
  }, [counter])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])

  useEffect(() => {
    setTimeInSeconds(0)

    const intervalId = setInterval(() => {
      setTimeInSeconds((timeInSeconds) => timeInSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [laps])

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>Vueltas: {laps}</p>
      <p>Tiempo en segundos: {timeInSeconds}</p>
      <button onClick={() => setLaps(laps + 1)}>Finalizar vuelta</button>
      {/* <p>{counter}</p>
      <button onClick={increment}>Incrementar</button> */}
    </div>
  )
}

export default Effect
