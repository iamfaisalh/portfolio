import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="h-full min-h-full w-full sm:px-6 lg:px-8 overflow-y-auto overflow-x-hidden">
      <Home />
      <About />
      <Projects />
    </div>
  );
}
