import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/sharedLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviePage2 from "./pages/MoviePage2";
import MoviePage3 from "./pages/MoviePage3";
import MoviePage4 from "./pages/MoviePage4";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/page2" element={<MoviePage2 />} />
          <Route path="movies/page3" element={<MoviePage3 />} />
          <Route path="movies/page4" element={<MoviePage4 />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
