import instance from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `bearer ${token}`;
    this.user = decode(token);
  };

  signUp = async (userData, navigate) => {
    try {
      const response = await instance.post("/signup", userData);
      this.setUser(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //   logout = () => {
  //     this.user = null;
  //   };
}

const authStore = new AuthStore();
export default authStore;
