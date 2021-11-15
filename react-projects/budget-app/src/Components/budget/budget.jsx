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
    <div className="budget-box">
      {isEditing ? (
        <AddBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ShowBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
