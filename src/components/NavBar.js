import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authenticationStore from "../Store/authenticationStore";
import { observer } from "mobx-react";

function NavBar() {
  return (
    // <nav>
    //   <Link to="/">Category</Link>
    //   <Link to="/">Logout</Link>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item"></li>
        </ul>

        <Form className="d-flex">
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
         */}

          {authenticationStore.user ? (
            <Button
              className="btn btn-outline-success"
              type="submit"
              type="submit"
              onClick={() => authenticationStore.logout()}
            >
              {" "}
              <Link to="/">logout</Link>
            </Button>
          ) : null}
        </Form>
      </div>
    </nav>
  );
}

export default observer(NavBar);
