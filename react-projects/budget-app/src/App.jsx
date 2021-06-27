import react, { Component } from "react";
import "./App.scss";
import Header from "./components/header/header";
import Expenses from "./components/expenses/expenses";
import Balance from "./components/balance/balance";
import NewExpense from "./components/new-expenses/new-expense";
// class Dummy_Expenses extends Component {
//   render() {
//     return <H1>Class Component</H1>;
//   }
// }

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Expenses />
        <div className="bal-new-box">
          <Balance />
          <NewExpense />
        </div>
      </div>
    </div>
  );
}

export default App;
