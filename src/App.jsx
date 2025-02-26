import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/details";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="max-w-7xl mx-auto my-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" />
          <Route path="/shows" />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:slug" element={<Details />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
