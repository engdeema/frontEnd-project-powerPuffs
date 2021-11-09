import { observer } from "mobx-react-lite";
import React from "react";
import CategoryStore from "../Store/recipeStore";
import RecipeItem from "./RecipeItem";
import { useState } from "react";

import React from "react";

function RecipieList() {
  const [state, setState] = useState("");

  const recipieList = jam3yaStore.jam3yat.filter((jam3ya) =>
    jam3ya.title.toLowerCase().includes(query)
  );

  return <div></div>;
}

export default observer(RecipieList);
