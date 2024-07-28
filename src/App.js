import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./screens/Contact";
import Education from "./screens/Education";
import Experience from "./screens/Experience";
import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
