import { Link, Outlet } from "react-router-dom"
import styles from './../../app/App.module.css'

export const BookLayout = () => {

  return (
    <>
      <Link to='/books/new'>Add new book</Link>
      <div className={styles.list}>
        <Outlet context={{ hello: 'World'}} />
      </div>
    </>
  )
}