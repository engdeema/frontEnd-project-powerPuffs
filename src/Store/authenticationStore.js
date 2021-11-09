import instance from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";

// REVIEW: Better name file `authStore`. It's common to use auth for authentication
// REVIEW: Better folder name `stores`. There are many stores in your app not one. And not capital, because it's not a component or a class.
class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    // REVIEW: Bearer not bearer
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
  signIn = async (userData, history) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      // REVIEW: I believe this should be navigate
      history.push("/");
    } catch (error) {}
  };
  logout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      // REVIEW: Correct naming is currentTime
      const currenTime = Date.now();
      // REVIEW: const not let :)
      let tempUser = decode(token);
      if (tempUser.exp >= currenTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

const authStore = new AuthStore();
export default authStore;
