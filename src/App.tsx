import { lazy } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout";

const Error = lazy(() => import("./pages/Error"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <HashRouter basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error type={"404"} />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
