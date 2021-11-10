import React from "react";
import recipeStore from "../Store/recipeStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import RecipieList from "./RecipieList";
const RecipeDetail = () => {
  const { recipeSlug } = useParams();

  const recipe = recipeStore.recipes.find(
    (recipe) => recipe.slug === recipeSlug
  );
  console.log(recipe);
  console.log(recipeStore.recipes);
  // if (recipeStore.isLoading) return <p>Loading</p>;
  recipeStore.isLoading || !recipe ? (
    <p>Loading</p>
  ) : (
    <Navigate to="/RecipieList" />
  );

  // if (!recipe) return <Navigate to="/RecipieList" />;
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // categoryStore.createrecepie(recipe);
  //     shopStore.createProduct(shopId, product);
  //     handleClose();

  //   const handleCreateRecipe = () => {};

  return (
    <div className="categoryDetail">
      <div
        className="card col-md-3 card border-primary m-5 "
        style={{ width: "16rem;" }}
      >
        <img src={recipe.image} className="card-img-top" alt="NO IMAGE!" />
        <div className="card-body">
          <h5 className="card-title">Recipe Name:{recipe.name}</h5>

          {/* <CategoryList
            categories={category.recipes}
            categoryId={category._id}
          /> */}

          {/* <p>Created By: {category.author.username}</p> */}

          {/* <button onClick={handleCreateRecipe} className="btn btn-light m-2">
           Create Recipe
          </button> */}
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default observer(RecipeDetail);
