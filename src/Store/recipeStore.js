import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RecipeStore {
  recipies = [];
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipe = async () => {
    try {
      const res = await instance.get("/recipe");
      this.recipies = res.data;
      this.isLoading = false;
    } catch (error) {}
  };
  createRecipe = async (newRecipe) => {
    try {
      const res = await instance.post("/recipe", newRecipe);
      console.log(newRecipe);
      this.recipies.push(res.data);
    } catch (error) {}
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipe();
export default recipeStore;
