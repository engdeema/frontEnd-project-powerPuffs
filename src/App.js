import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
// Components
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<CategoryList />} />
      </Routes>
    </>
  );
}

export default App;
