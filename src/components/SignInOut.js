import { useState } from "react";
import { observer } from "mobx-react";
import authenticationStore from "../Store/authenticationStore";
import { useNavigate } from "react-router-dom";
import React from "react";

function SignInOut() {
  const navigate = useNavigate();
  const [userStatus, setUserStatus] = useState(false);
  const [signedIn, setSignIn] = useState({
    username: "",
    password: "",
  });
  const [signedUp, setSignUp] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleSignIn = (e) => {
    setSignIn({ ...signedIn, [e.target.name]: e.target.value });
  };
  const handleSignUp = (e) => {
    setSignUp({ ...signedUp, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // 1) ican't use hoocks unless inside componet
    //2) i will pass it as an argument ()

    userStatus === false
      ? authenticationStore.signIn(signedIn, navigate)
      : authenticationStore.signUp(signedUp, navigate);
  };

  return (
    <div class="container">
      <div class="title"></div>
      <div class="textplace">
        <div class="field"></div>
        <div class="sub"></div>
        <div class="in\/up"></div>
      </div>

      <div className="sign box">
        <div className="SignInDiv " id="SignIn">
          <h1 className="welcomeHeader text-gradient">
            Welcome to PowerPuff Girls Projects
          </h1>
          <div className="button-position">
            <button
              className=" btn-grad margin"
              onClick={() => {
                setUserStatus(false);
              }}
            >
              Sign In
            </button>
            <button
              className="btn-grad margin"
              onClick={() => {
                setUserStatus(true);
              }}
            >
              Create account
            </button>
          </div>
          {userStatus === false ? (
            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
              <input
                className="form-control"
                onChange={handleSignIn}
                name="username"
                placeholder="Enter UserName"
              />
              <input
                className="form-control"
                onChange={handleSignIn}
                name="password"
                placeholder="Password"
              />
              <button className="btn-grad" type="submit">
                Submit
              </button>
            </form>
          ) : (
            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
              <input
                className="form-control"
                onChange={handleSignUp}
                name="username"
                placeholder="Enter UserName"
              />
              <input
                className="form-control"
                onChange={handleSignUp}
                name="email"
                placeholder="E-Mail"
              />
              <input
                className="form-control"
                onChange={handleSignUp}
                name="password"
                placeholder="Password"
              />
              <button type="submit" className="btn-grad">
                Submit
              </button>
            </form>
          )}
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap%27);
          </style>
        </div>
      </div>
    </div>
  );
}

export default observer(SignInOut);
