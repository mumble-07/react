import React from "react";
import "./App.scss";
import Header from "./Components/header/header";
import Expenses from "./Components/expenses/expenses";
import Balance from "./Components/balance/balance";
import NewExpense from "./Components/new-expenses/new-expense";
import Chart from "./Components/chart/chart";
import { AppProvider } from "./Context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div>
        <Header />
        <div className="main-container">
          <Expenses />
          <div className="bal-new-box">
            <Balance />
            <NewExpense />
          </div>
          <Chart />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
