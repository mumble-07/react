import "./expenses.scss";
import ExpensesList from "./expenses-list";

const Expenses = (props) => {
  console.log(props);
  return (
    <div className="expenses-box">
      <ExpensesList items={props.expenses} />
    </div>
  );
};

export default Expenses;
