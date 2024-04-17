import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Cards from "./components/Cards";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/CardDetails/:id" element={<CardDetails />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
