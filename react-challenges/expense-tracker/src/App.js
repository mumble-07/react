import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./Expenses/ExpenseItem";
import Card from "./UI/Card";
const App = () => {
  return (
    <div className="App">
      <Card className="expenses">
        {/* <div className="card expenses"></div> */}
        <Card>
          <ExpenseItem />
        </Card>
        <Card>
          <ExpenseItem />
        </Card>
        <ExpenseItem />
      </Card>
    </div>
  );
};
export default App;
