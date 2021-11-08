import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
// const str = "";
function CategoryList() {
  return (
    // <div>
    //   <h1>CategoryList</h1>
    //   <Link to="/Appetizars">Appetizars</Link>
    //   <p> {str} </p>
    //   <Link to="/Main-dish">Main dish</Link>
    //   <p> {str} </p>
    //   <Link to="/Desserts">Desserts</Link>
    //   <p> {str} </p>
    //   <Link to="/Beverages">Beverages</Link>
    // </div>

    <div className="list-group">
      <a
        href="/"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        CategoryList
      </a>
      <a href="/Appetizars" className="list-group-item list-group-item-action">
        Appetizars
      </a>
      <a href="/Main-dish" className="list-group-item list-group-item-action">
        Main dish
      </a>
      <a href="/Desserts" className="list-group-item list-group-item-action">
        Desserts
      </a>
      <a href="/Beverages" className="list-group-item list-group-item-action">
        Beverages
      </a>
    </div>
  );
}

export default CategoryList;
