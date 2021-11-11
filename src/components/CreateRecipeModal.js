import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import recipeStore from "../Store/recipeStore";

//اهوا اللي راح يسوي كرييت حق الريسيبي مالي
function CreateRecipeModal({ categoryId }) {
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
    // productStore.createProduct(product);
    // اهيا الكرييت تاخذ آي دي الشوب والبرودكت اليديد
    //كرييت بتن داخل اللست ، اللست
    // داخل الشوب ديتيل ، ف البتن يخص الشوب فقط وليس كل الشوبس
    // المودال نناديها داخل اللست
    // اللست نناديها بالديتيل
    // راح اطرش الآيدي الشوب عن طريق برودكت مودال الحفيده
    recipeStore.createRecipe(categoryId, createRecipe);
    handleClose();
  };

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

export default CreateRecipeModal;
