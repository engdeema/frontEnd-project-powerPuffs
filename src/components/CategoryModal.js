import React from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import categoryStore from "../Store/categoryStore";

function CategoryModal() {
  const [show, setShow] = useState(false);
  const [category, setcategory] = useState({
    name: "",
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

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
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

            <Button variant="outline-dark" type="submit">
              Add Category
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CategoryModal;
