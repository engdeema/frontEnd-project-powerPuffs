import { useState } from "react";
import { observer } from "mobx-react";
import authenticationStore from "../Store/authenticationStore";
import { useNavigate } from "react-router-dom";
import React from "react";

// REVIEW: component should be called Auth for example, or SignInUp
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
      ? authenticationStore.signIn(signedIn)
      : authenticationStore.signUp(signedUp, navigate);
  };

  return (
    <div className="SignInDiv" id="SignIn">
      <h1 className="welcomeHeader">Welcome to PowerPuff Girls Projects</h1>
      <h4 className="welcomeHeader">Sign in / sign up</h4>
      <div className="btnSign">
        <button
          className="btn btn-inverse btn-primary"
          onClick={() => {
            setUserStatus(false);
          }}
        >
          Sign In
        </button>
        <button
          className="btn btn-inverse btn-primary"
          onClick={() => {
            setUserStatus(true);
          }}
        >
          Create account
        </button>
      </div>
      {/* REVIEW: You can say !userStatus instead of userStatus === false */}
      {userStatus === false ? (
        // REVIEW: Move the signin form into its own component
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
          <button className="btn btn-inverse btn-primary" type="submit">
            {/* REVIEW: USe a better word `Sign in` for example */}
            Submit
          </button>
        </form>
      ) : (
        // REVIEW: Move the signup form into its own component
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
          <button type="submit" className="btn btn-inverse btn-primary">
            Submit
          </button>
        </form>
      )}
      {/* This should be in index.html not here */}
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap%27);
      </style>
    </div>
  );
}

export default observer(SignInOut);
