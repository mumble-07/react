import React, { useState } from "react";
import "./style/add-budget.scss";

const AddBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  return (
    <div className="add-budget-box">
      <input
        required
        placeholder="Edit Budget Amount: ₲"
        autoComplete="off"
        min="0.01"
        step="0.01"
        type="number"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="button" onClick={() => props.handleSaveClick(value)}>
        Save
      </button>
    </div>
  );
};

export default AddBudget;
