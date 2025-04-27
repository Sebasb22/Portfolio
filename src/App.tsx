import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PaginaInicio from "./Components/PaginaInicio";
import Resume from "./Components/Resume";

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
