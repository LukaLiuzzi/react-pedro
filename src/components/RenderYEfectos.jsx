import { useState, useRef } from "react"

const RenderYEfectos = () => {
  const [posts, setPosts] = useState([])
  const refCount = useRef(0)

  refCount.current++
  console.log(refCount.current)

  // fetch("")
  //   .then((response) => response.json())
  //   .then((data) => setPosts(data))

  return (
    <div>
      {posts.map((post) => (
        <div key={post.title}>{post.title}</div>
      ))}
    </div>
  )
}

export default RenderYEfectos
