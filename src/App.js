import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import CategoryDetail from "./components/CategoryDetail";
import RecipieList from "./components/RecipieList";
import RecipeDetail from "./components/RecipeDetail";
import CategoryItem from "./components/CategoryItem";

// Components
import NavBar from "./components/NavBar";

import SignInOut from "./components/SignInOut";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/CategoryList/:categorySlug"
          element={<CategoryDetail />}
        />

        <Route path="/CategoryList" element={<CategoryList />} />

        <Route path="/RecipieList" element={<RecipieList />} />

        <Route path="/RecipieList/:recipeSlug" element={<RecipeDetail />} />

        <Route path="/" element={<SignInOut />} />
      </Routes>
    </div>

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
