import "./style/new-expense.scss";
import NewExpenseForm from "./new-expense-form";
import { useState } from "react";

const NewExpense = (props) => {
  const [showAddButton, setShowAddButton] = useState(false);
  //STATE 1
  const showForm = () => {
    setShowAddButton(true);
  };
  //STATE 2
  const hideForm = () => {
    setShowAddButton(false);
  };

  return (
    <div className="new-expense">
      {!showAddButton && <button onClick={showForm}>Add New Expense</button>}
      {showAddButton && <NewExpenseForm onCancel={hideForm} />}
    </div>
  );
};

export default NewExpense;
