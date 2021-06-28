import react from "react";
import "./App.scss";
import Header from "./components/header/header";
import Expenses from "./components/expenses/expenses";
import Balance from "./components/balance/balance";
import NewExpense from "./components/new-expenses/new-expense";
import Chart from "./components/chart/chart";

// class Dummy_Expenses extends Component {
//   render() {
//     return <H1>Class Component</H1>;
//   }
// }

const DUMMY_EXPENSES = [
  {
    title: "Brand New Laptop",
    amount: "1000",
    date: new Date(2020, 2, 28),
  },
];

const App = () => {
  return (
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
  );
};

export default App;
