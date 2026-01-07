import "./App.css";
import About from "./sections/About";
import Header from "./sections/header/Header";
import Main from "./sections/Main";

function App() {
  return (
    <div className="text-primary-black font-light pb-200">
      <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
        <Header />
        <div className="flex flex-col gap-20 md:gap-30 lg:gap-40">
          <Main />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
