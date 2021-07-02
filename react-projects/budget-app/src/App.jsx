import React from "react";
import "./App.scss";
import Header from "./Components/header/header";
import Expenses from "./Components/expenses/expenses";
import TotalExpenses from "./Components/total-expenses/total-expenses";
import Balance from "./Components/balance/balance";
import Budget from "./Components/budget/budget";
import NewExpense from "./Components/new-expenses/new-expense";
import Chart from "./Components/chart/chart";
import { AppProvider } from "./Context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div>
        <Header />
        <div className="main-container">
          <div className="budget-balance-card">
            <Budget />
            <Balance />
          </div>
          <div className="total-expenses-card">
            <TotalExpenses />
          </div>
          <div className="add-new-expense-card">
            <NewExpense />
          </div>
          <div className="expenses-card">
            <Expenses />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
