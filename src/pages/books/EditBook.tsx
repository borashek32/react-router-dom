import { useParams } from "react-router-dom"

export const EditBook = () => {
  const { id } = useParams()

  return (
    <h1>Edit book {id}</h1>
  )
}