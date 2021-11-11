import React from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import categoryStore from "../Store/categoryStore";
import { observer } from "mobx-react";

function CategoryModal() {
  const [show, setShow] = useState(false);
  const [category, setcategory] = useState({
    name: "",
    image: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setcategory({ ...category, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    categoryStore.createCategory(category);
    handleClose();
  };
  const handleImage = (event) =>
    setcategory({ ...category, image: event.target.files[0] });

  return (
    <>
      <Button variant="btn btn-grad" onClick={handleShow}>
        New
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your category's name"
                name="name"
                value={category.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                name="image"
                type="file"
                onChange={handleImage}
                placeholder="Image"
              />
            </InputGroup>
            <Button variant="outline-dark" type="submit">
              Add Category
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default observer(CategoryModal);
