import react from "react";
import "./App.scss";
import Header from "./components/header/header";
import Expenses from "./components/expenses/expenses";

function App() {
  return (
    <div>
      <Header />
      <Expenses />
    </div>
  );
}

export default App;
