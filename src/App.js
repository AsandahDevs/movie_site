import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/sharedLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
