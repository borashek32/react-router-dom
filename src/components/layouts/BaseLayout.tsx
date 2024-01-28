import styles from './BaseLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

export const BaseLayout = () => {

  return (
    <>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to={'/'} className={({isActive}) => isActive ? styles.active : styles.link}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/books'} className={({isActive}) => isActive ? styles.active : styles.link}>Books</NavLink>
          </li>
          <li>
            <NavLink to={'/books/new'} className={({isActive}) => isActive ? styles.active : styles.link}>Add book</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={({isActive}) => isActive ? styles.active : styles.link}>About</NavLink>
          </li>
        </ul>
      </nav>

      <main className={styles.container}>
        <Outlet />  
      </main>

      <footer className={styles.footer}>2024</footer>
    </>
  )
}