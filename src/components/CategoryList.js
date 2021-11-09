import React from "react";
import CategoryModal from "./CategoryModal";
import categoryStore from "../Store/categoryStore";
import CategoryCard from "./CategoryCard";
import { Form, Row, Stack } from "react-bootstrap";
import { useState } from "react";

function CategoryList({ category }) {
  const [query, setQuery] = useState("");

  const categoryList = categoryStore.categories
    .filter((category) => category.name.includes(query))
    .map((category) => <CategoryCard key={category._id} category={category} />);

  return (
    <div className="list-group">
      <h1 className="title">Categorys</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for category by name"
          onChange={(event) => setQuery(event.target.value)}
        />
        <CategoryModal />
      </Stack>

      <Row>{categoryList}</Row>
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
