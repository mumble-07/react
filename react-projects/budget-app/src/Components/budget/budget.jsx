import React, { useState, useContext } from "react";
import "./style/budget.scss";
import ShowBudget from "./show-budget";
import AddBudget from "./add-budget";
import { AppContext } from "../../Context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "Add-Budget",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div class="budget-box">
      <h1>BUDGET</h1>
      <h3>$ {budget}</h3>
      {isEditing ? (
        <AddBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        // For part 1 render component inline rather than create a seperate one
        <ShowBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
