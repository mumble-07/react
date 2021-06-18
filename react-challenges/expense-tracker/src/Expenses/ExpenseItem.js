import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <Card>
        <ExpenseDate />
      </Card>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <Card>
          <div className="expense-item__price">$100,000</div>
        </Card>
      </div>
    </div>
  );
};

export default ExpenseItem;
