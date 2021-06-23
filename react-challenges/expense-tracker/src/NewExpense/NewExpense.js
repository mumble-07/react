import "./NewExpense.scss";
import ExpenseForm from "./ExpenseForm";
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

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //Spread operator --> reassigning value
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!showAddButton && <button onClick={showForm}>Add New Expense</button>}
      {showAddButton && (
        <ExpenseForm
          onCancel={hideForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
