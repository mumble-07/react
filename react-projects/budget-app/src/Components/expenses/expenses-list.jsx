import React, { useContext } from "react";
import "./style/expenses-list.scss";
import ExpensesHeader from "./expenses-header";
import ExpenseItems from "./expense-items";
import { AppContext } from "../../Context/AppContext";

const ExpensesList = () => {
  const { expenses } = useContext(AppContext);

  //  const expenses = [
  //   {
  //     title: "Laptop",
  //     amount: "1000",
  //     date: new Date(2020, 2, 28),
  //   },
  //   {
  //     title: "House and Lot",
  //     amount: "100000",
  //     date: new Date(),
  //   },
  //   {
  //     title: "Bike",
  //     amount: "1000",
  //     date: new Date(2020, 3, 2),
  //   },
  //   {
  //     title: "Jollibee",
  //     amount: "1000",
  //     date: new Date(2020, 2, 28),
  //   },
  // ];

  return (
    <div>
      <ExpensesHeader />
      {expenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
