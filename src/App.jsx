import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Docs from "./pages/Docs";

const App = () => (
  <>
    <ScrollToTop />
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
    <Footer />
  </>
);

export default App;
