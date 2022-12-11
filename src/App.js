import "./App.css";
import "./Navbar.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ResponsiveRedesign from "./pages/ResponsiveRedesign";
import ScrollToTop from "./ScrollToTop";
import Personas from "./pages/Personas";
import Iterative from "./pages/Iterative";
import Development from "./pages/Development";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="responsive-redesign" element={<ResponsiveRedesign />} />
            <Route path="personas" element={<Personas />} />
            <Route path="iterative" element={<Iterative />} />
            <Route path="development" element={<Development />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
