import "./App.css";
import Header from "./sections/header/Header";
import Main from "./sections/Main";

function App() {
  return (
    <div className="text-primary-black pb-200">
      <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
