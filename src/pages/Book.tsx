import { useParams } from "react-router-dom"

interface BookContext {
  hello: string;
}

export const Book = () => {
  const { id } = useParams()

  return (
    <>
      <h1>Book {id}</h1>
    </>
  )
}