import React from "react";
import categoryStore from "../Store/categoryStore";
import { observer } from "mobx-react";
import RecipieList from "./RecipieList";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
const CategoryDetail = () => {
  const { categorySlug } = useParams();

  if (categoryStore.isLoading) return <p>Loading</p>;

  const category = categoryStore.categories.find(
    (category) => category.slug === categorySlug
  );
  if (!category) return <Navigate to="/CategoryList" />;
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // categoryStore.createrecepie(recipe);
  //     shopStore.createProduct(shopId, product);
  //     handleClose();

  //   const handleCreateRecipe = () => {};

  return (
    <div className="categoryDetail">
      <div
      // className="card col-md-3 card border-primary m-5 "
      // style={{ width: "16rem;" }}
      >
        <img src={category.image} className="card-img-top" alt="NO IMAGE!" />
        <div className="card-body">
          {/* <h5 className="card-title">Category Name:{category.name}</h5> */}
          <RecipieList category={category} />

          {/* <p>Created By: {category.author.username}</p> */}

          {/* <button onClick={handleCreateRecipe} className="btn btn-light m-2">
           Create Recipe
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default observer(CategoryDetail);
