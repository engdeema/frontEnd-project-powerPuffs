import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  constructor() {
    makeAutoObservable(this);
  }
  categories = [];
  isLoading = true;
  createCategory = async (newCategory) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) {
        formData.append(key, newCategory[key]);
      }
      const response = await instance.post("/categories", formData);
      this.categories.push(response.data);
      console.log("alll");
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.log("CategoryStore -> fetchCategories -> error", error);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();

export default categoryStore;
