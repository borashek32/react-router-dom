import { Link, Outlet } from "react-router-dom"
import styles from './../App.module.css'

export const BookLayout = () => {

  return (
    <>
      <h1>BookList</h1>
      <div className={styles.list}>
        <Link to={'/books/1'}>Book 1</Link>
        <Link to={'/books/2'}>Book 2</Link>
        <Link to={'/books/new'}>New Book</Link>
        <Outlet context={{ hello: 'World'}} />
      </div>
    </>
  )
}