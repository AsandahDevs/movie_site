import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/sharedLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
