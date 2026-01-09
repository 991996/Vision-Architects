import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Header from "./sections/header/Header";
import Main from "./sections/Main";
import Numbers from "./sections/Numbers";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="text-primary-black font-light pb-200">
      <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
        <Header />
        <div className="flex flex-col gap-20 md:gap-30 lg:gap-40">
          <Main />
          <About />
          <Numbers />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
