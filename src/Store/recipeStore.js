import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipeStore {
  recipes = [];
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipe = async () => {
    try {
      const res = await instance.get("/recipe");
      this.recipes = res.data;
      this.isLoading = false;
    } catch (error) {}
  };
  //فورم داتا
  createRecipe = async (category, newRecipe) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) {
        formData.append(key, newRecipe[key]);
      }

      const res = await instance.post(
        `/categories/${category._id}/recepies`,
        formData
      );
      console.log(newRecipe);
      this.recipes.push(res.data);
      category.recipes.push(res.data);
    } catch (error) {}
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipe();
export default recipeStore;
