import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const Contact = lazy(() => import("./screens/Contact"));
const Education = lazy(() => import("./screens/Education"));
const Experience = lazy(() => import("./screens/Experience"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const Projects = lazy(() => import("./screens/Projects"));
const NotFound = lazy(() => import("./screens/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
