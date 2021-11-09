import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
// Components
import NavBar from "./components/NavBar";
import Appetizars from "./components/Appetizars";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CategoryList />} />
      </Routes>
      <Routes>
        <Route path="/Appatizer" element={<Appetizars />} />
      </Routes>
    </>
  );
}

export default App;
