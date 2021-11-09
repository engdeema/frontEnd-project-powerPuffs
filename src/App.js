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
      {/* REVIEW: You need one <Routes></Routes> only, and inside it you put all your <Route /> */}
      <Routes>
        <Route path="/CategoryList" element={<CategoryList />} />
      </Routes>
      <Routes>
        <Route path="/" element={<SignInOut />} />
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
