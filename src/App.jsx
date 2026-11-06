import "./App.css";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <div className="fixed w-screen h-min">
        <img
          src="/lines.svg"
          alt=""
          className="object-contain h-full w-screen"
        />
      </div>
      <div className="fixed w-screen h-min bottom-0 left-0">
        <img src="/lines.svg" alt="" className="-scale-y-100" />
      </div>
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
