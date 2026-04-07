import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}