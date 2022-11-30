import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/sharedLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviePage2 from "./pages/MoviePage2";
import MoviePage3 from "./pages/MoviePage3";
import MoviePage4 from "./pages/MoviePage4";
import MoviePage5 from "./pages/MoviePage5";
import MoviePage6 from "./pages/MoviePage6";
import MoviePage7 from "./pages/MoviePage7";
import MoviePage8 from "./pages/MoviePage8";
import MoviePage9 from "./pages/MoviePage9";
import MoviePage10 from "./pages/MoviePage10";
import Error from "./pages/Error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/movie_site/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/page2" element={<MoviePage2 />} />
          <Route path="movies/page3" element={<MoviePage3 />} />
          <Route path="movies/page4" element={<MoviePage4 />} />
          <Route path="movies/page5" element={<MoviePage5 />} />
          <Route path="movies/page6" element={<MoviePage6 />} />
          <Route path="movies/page7" element={<MoviePage7 />} />
          <Route path="movies/page8" element={<MoviePage8 />} />
          <Route path="movies/page9" element={<MoviePage9 />} />
          <Route path="movies/page10" element={<MoviePage10 />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
