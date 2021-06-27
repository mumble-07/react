import "./expense-items.scss";
import { TiDelete } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import ExpenseDate from "./expense-date";

const ExpenseItems = () => {
  return (
    <div className="expenses-items">
      <div className="items">
        <h4>Laptop</h4>
        <h4>$ 100</h4>
        <ExpenseDate />
        <div className="items-icons">
          <TiEdit className="edit" />
          <TiDelete className="delete" />
        </div>
      </div>
    </div>
  );
};

export default ExpenseItems;
