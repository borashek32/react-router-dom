import styles from './BaseLayout.module.css';
import { Link, Outlet } from 'react-router-dom';

export const BaseLayout = () => {

  return (
    <>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/books'}>Books</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
      </nav>

      <main className={styles.container}>
        <Outlet />  
      </main>

      <footer>2024</footer>
    </>
  )
}