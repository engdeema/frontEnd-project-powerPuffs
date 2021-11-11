import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import recipeStore from "../Store/recipeStore";
import { observer } from "mobx-react";

//اهوا اللي راح يسوي كرييت حق الريسيبي مالي
function CreateRecipeModal({ category }) {
  const [show, setShow] = useState(false);
  const [createRecipe, setCreateRecipe] = useState({
    name: "",
    image: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setCreateRecipe({
      ...createRecipe,
      [event.target.name]: event.target.value,
    });

  const handleImage = (event) =>
    setCreateRecipe({ ...createRecipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(categoryId, createRecipe);
    recipeStore.createRecipe(category, createRecipe);
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
                placeholder="Create your own Recipe"
                name="name"
                value={createRecipe.name}
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
              Add Recipe
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default observer(CreateRecipeModal);
