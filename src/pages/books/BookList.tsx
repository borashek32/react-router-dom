import { useEffect, useState } from 'react'
import styles from './../Pages.module.css'
import { Link } from 'react-router-dom'
import { Book } from '../Pages.types'

export const BookList = () => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setBooks(json))
  }, [])

  return (
    <>
      <ul>
        {books && books.map(item => {
          return (
            <li className={styles.item} key={item.id}>
              <Link to={`/books/${item.id}`}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}