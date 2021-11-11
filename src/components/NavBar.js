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

    <>
      <div>
        <Form>
          {authenticationStore.user ? (
            <Button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => authenticationStore.logout()}
            >
              {" "}
              <Link to="/">logout</Link>
            </Button>
          ) : null}
        </Form>
      </div>

      <div>
        <a class="navbar-brand" href="/">
          <div class="logo-image">
            <img
              src="https://pre00.deviantart.net/f2dd/th/pre/i/2014/264/2/6/perfect_little_girls_by_reitanna_seishin-d8036e8.png"
              class="img-fluid"
            />
          </div>
        </a>
        {/* </nav> */}
      </div>
    </>
  );
}

export default observer(NavBar);
