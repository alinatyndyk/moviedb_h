import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import MovieItemPage from "./pages/MovieItemPage/MovieItemPage";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'movies'}/>}/>
              <Route path={'movies'} element={<MoviesPage/>}>
              <Route path={'genres'} element={<GenrePage/>}/>
              </Route>
          </Route>
      </Routes>

  );
}

export default App;
