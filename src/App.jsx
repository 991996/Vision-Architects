import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./sections/Footer";
import Header from "./sections/header/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import OurProjects from "./pages/OurProjects";
import Certification from "./pages/Certification";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
  return (
    <div className="text-primary-black font-light">
      <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
        <Header />
        <div className="flex flex-col gap-20 md:gap-30 lg:gap-40">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/projects" element={<OurProjects />}></Route>
            <Route path="/certification" element={<Certification />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/project-details" element={<Project />}></Route>
          </Routes>
        </div>
      </div>
      <div className="mt-20 md:mt-30 lg:mt-40">
        <Footer />
      </div>
    </div>
  );
}

export default App;
