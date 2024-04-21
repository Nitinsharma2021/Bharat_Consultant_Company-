import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />

      {/* <h1 className="text-3xl text-[#edc967] bg-red-200 font-bold underline">
        Hello world!
      </h1>
      <h1 className="text-3xl text-[#ae8625] bg-red-200 font-bold underline">
        Hello world!
      </h1>
      <h1 className="text-3xl text-[#f7ef8a] bg-red-200 font-bold underline">
        Hello world!
      </h1>
      <h1 className="text-3xl text-[#d2ac47] bg-red-200 font-bold underline">
        Hello world!
      </h1>
      <h1 className="text-3xl text-[#e0aa3e] bg-red-200 font-bold underline">
        Hello world!
      </h1> */}
    </div>
  );
}
