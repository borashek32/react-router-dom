import { Link, useNavigate, useParams } from "react-router-dom"
import { Book } from '../Pages.types'
import { useEffect, useState } from "react"
import styles from './../Pages.module.css'

export const SingleBook = () => {
  const { id } = useParams()
  const [book, setBook] = useState<Book>()
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => setBook(json))
  }, [id])

  return (
    <div className={styles.book}>
      <button onClick={goBack}>Go back to books list</button>
      <Link to={'/'}>Go home</Link>
      <h3>{book?.title}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ratione optio qui tempora ut omnis facere praesentium reprehenderit possimus repellat.</p>
      <Link to={`/books/${id}/edit`}>Edit book</Link>
    </div>
  )
}