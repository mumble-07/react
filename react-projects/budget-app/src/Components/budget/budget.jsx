import React, { useState, useContext } from "react";
import "./style/budget.scss";
import { AppContext } from "../../Context/AppContext";
// import ViewBudget from "./ViewBudget";
// import EditBudget from "./EditBudget";

const Budget = () => {
  const { budget } = useContext(AppContext);
  //   const [isEditing, setIsEditing] = useState(false);

  //   const handleEditClick = () => {
  //     setIsEditing(true);
  //   };

  //   const handleSaveClick = (value) => {
  //     dispatch({
  //       type: "SET_BUDGET",
  //       payload: value,
  //     });
  //     setIsEditing(false);
  //   };

  return (
    <div class="budget-box">
      <h1>BUDGET</h1>
      <h3>$ {budget}</h3>
      {/* {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        // For part 1 render component inline rather than create a seperate one
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )} */}
    </div>
  );
};

export default Budget;
