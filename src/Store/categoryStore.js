import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  categories = [];
  isLoading = true;
  constructor() {
    makeAutoObservable(this);
  }
  fetchCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
      // console.log(categories);
      this.isLoading = false;
    } catch (error) {}
  };

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
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();
export default categoryStore;
