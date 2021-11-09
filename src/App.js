import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
// Components
import NavBar from "./components/NavBar";

import SignInOut from "./components/SignInOut";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/CategoryList" element={<CategoryList />} />

        <Route path="/" element={<SignInOut />} />


        <Route path="/Appatizer" element={<Appetizars />} />
      </Routes>
    </>

    // import "./App.css";
    // import { observer } from "mobx-react";
    // import Home from "./components/Home";

    // function App() {
    // return (
    //   <div>
    //     <Home />
    //   </div>
  );
}

export default App;
