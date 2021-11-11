import { useState } from "react";
// import RecipModal from "./ProductModal";
import { observer } from "mobx-react";
import { Form, Row, Stack } from "react-bootstrap";
import RecipeItem from "./RecipeItem";
import CreateRecipeModal from "./CreateRecipeModal";
import recipeStore from "../Store/recipeStore";

function RecipieList({ category }) {
  const [query, setQuery] = useState("");
  const recipieLists =
    category.recipes.length > 0
      ? category.recipes
          .filter((recipe) => recipe?.name.toLowerCase().includes(query))
          .map((recipe) => <RecipeItem key={recipe._id} recipe={recipe} />)
      : [];

  return (
    <div>
      <h1 className="title">Recipes</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for recipe by name"
          onChange={(event) => setQuery(event.target.value)}
        />
        <CreateRecipeModal category={category} />
      </Stack>

      <Row>{recipieLists}</Row>
    </div>
  );
}

export default observer(RecipieList);
