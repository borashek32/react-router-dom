import { Route, Routes } from 'react-router-dom';
import { BookList } from '../pages/books/BookList';
import { SingleBook } from '../pages/books/SingleBook';
import { NewBook } from '../pages/books/NewBook';
import { BookLayout } from '../components/layouts/BooksLayout';
import { EditBook } from '../pages/books/EditBook';

export function BookRoutes() {

  return (
    <Routes>
      <Route element={<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path={':id'} element={<SingleBook />} />
        <Route path={':id/edit'} element={<EditBook />} />
        <Route path={'new'} element={<NewBook />} />
      </Route>
    </Routes>
  )
}