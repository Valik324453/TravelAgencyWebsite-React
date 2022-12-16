//import logo from './logo.svg';
import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Context from "./components/Context";
import Forest from "./components/Forest";
import Sea from "./components/Sea";
import Mountain from "./components/Mountain";
import Arctic from "./components/Arctic";
import Monastery from "./components/Monastery";
import Lake from "./components/Lake";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Context>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />

          <Route path="/forest" element={<Forest />} />
          <Route path="/sea" element={<Sea />} />
          <Route path="/mountain" element={<Mountain />} />
          <Route path="/arctic" element={<Arctic />} />
          <Route path="/monastery" element={<Monastery />} />
          <Route path="/lake" element={<Lake />} />
        </Routes>
      </Context>
    </HashRouter>
  );
}

export default App;
