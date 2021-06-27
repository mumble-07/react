import "./expenses-list.scss";
import ExpensesHeader from "./expenses-header";
import ExpenseItems from "./expense-items";

const ExpensesList = (props) => {
  return (
    <div>
      <ExpensesHeader />
      <ExpenseItems />
    </div>
  );
};

export default ExpensesList;
