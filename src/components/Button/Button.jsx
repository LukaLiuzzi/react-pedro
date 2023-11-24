import "./Button.css"

const Button = (props) => {
  const { title } = props
  const { handleClick } = props
  return (
    <button className="button" onClick={handleClick}>
      {title}
    </button>
  )
}

export default Button
