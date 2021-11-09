import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <li className="nav-item">
            <Button className="nav-link" href="#">
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
