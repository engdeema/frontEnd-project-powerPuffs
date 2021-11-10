import React from "react";
import { Link } from "react-router-dom";
import RecipieList from "./RecipieList";

function RecipeItem({ recipe }) {
  return (
    <div
      className="card col-md-3 card border-primary m-5 "
      style={{ width: "16rem;" }}
    >
      <img src={recipe.image} className="card-img-top" alt="NO IMAGE!" />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>

        <Link to={`/RecipieList/${recipe.slug}`}>
          <button className="btn btn-primary">Go to Recipe </button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;
