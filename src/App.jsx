import "./App.css";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <div className="fixed -left-3 flex w-screen h-min overflow-hidden">
        <img src="/lines.svg" alt="" />
        <img src="/lines.svg" alt="" />
      </div>
      <div className="fixed flex w-screen h-min bottom-0 -left-3 overflow-hidden">
        <img src="/lines.svg" alt="" className="-scale-y-100 -scale-x-100" />
        <img src="/lines.svg" alt="" className="-scale-y-100 -scale-x-100" />
      </div>
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
