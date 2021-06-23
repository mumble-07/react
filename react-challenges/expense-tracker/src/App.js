import React, { useState } from "react";

import "./App.scss";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: "1000",
    date: new Date(2021, 2, 28),
  },
  {
    title: "Brand New Laptop",
    amount: "1000",
    date: new Date(2020, 2, 28),
  },
  {
    title: "House and Lot",
    amount: "2000",
    date: new Date(2019, 8, 6),
  },
  {
    title: "Insurance",
    amount: "3000",
    date: new Date(2018, 12, 7),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};
export default App;
