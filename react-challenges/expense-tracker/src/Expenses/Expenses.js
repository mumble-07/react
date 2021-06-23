import "./Expenses.scss";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList.js";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2021");
  console.log(filteredYear);
  const filterChangedHandler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(props);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangedHandler}
          selectedValue={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
