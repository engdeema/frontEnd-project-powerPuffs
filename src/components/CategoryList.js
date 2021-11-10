import React from "react";
import { observer } from "mobx-react-lite";
import CategoryModal from "./CategoryModal";
import categoryStore from "../Store/categoryStore";
import CategoryItem from "./CategoryItem";
import { Form, Row, Stack } from "react-bootstrap";
import { useState } from "react";

function CategoryList() {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const categoryList = categoryStore.categories
    .filter((category) => category.name.includes(state))
    .map((category) => <CategoryItem key={category._id} category={category} />);

  return (
    <div className="list-group ">
      <h1 className="title text-gradient-black">Categories</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for category by name"
          onChange={handleChange}
        />
        <CategoryModal />
      </Stack>

      <Row>{categoryList}</Row>
    </div>
  );
}

export default observer(CategoryList);
