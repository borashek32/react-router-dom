import { Route, Routes, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import styles from './App.module.css';
import { BaseLayout } from "../components/layouts/BaseLayout";
import { NotFound } from "../pages/NotFound";
import { BookRoutes } from "../routes/BookRoutes";
import { About } from "../pages/About";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import { Login } from "../pages/auth/Login";

function App() {
  // const router = useRoutes([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '/about',
  //     element: <About />
  //   },
  //   {
  //     path: '*',
  //     element: <NotFound />
  //   }
  // ])
  
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path={'/'}  element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path={'books/*'} element={
            <WithAuthRedirect>
              <BookRoutes />
            </WithAuthRedirect>
          } />
          <Route path={'about'} element={<About />} />
          <Route path={'*'} element={<NotFound />} />
          <Route path={'login'} element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
