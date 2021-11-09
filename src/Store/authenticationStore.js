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
      navigate("/CategoryList");
    } catch (error) {
      console.log(error);
    }
  };
  signIn = async (userData, navigate) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      navigate("/CategoryList");
    } catch (error) {}
  };
  logout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
    console.log("logout");
  };
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currenTime = Date.now();
      let tempUser = decode(token);
      if (tempUser.exp >= currenTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

const authenticationStore = new AuthStore();
export default authenticationStore;
