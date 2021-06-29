import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import Expenses from "./components/expenses/expenses";
import Balance from "./components/balance/balance";
import NewExpense from "./components/new-expenses/new-expense";
import Chart from "./components/chart/chart";

const DUMMY_EXPENSES = [
  {
    title: "Brand New Laptop",
    amount: "1000",
    date: new Date(2020, 2, 28),
  },
  {
    title: "House and Lot",
    amount: "100000",
    date: new Date(),
  },
  {
    title: "Bike",
    amount: "1000",
    date: new Date(2020, 3, 2),
  },
  {
    title: "Jollibee",
    amount: "1000",
    date: new Date(2020, 2, 28),
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Expenses expenses={DUMMY_EXPENSES} />
        <div className="bal-new-box">
          <Balance />
          <NewExpense />
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default App;
