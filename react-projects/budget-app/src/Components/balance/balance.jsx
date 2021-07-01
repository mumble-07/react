import React, { useContext } from "react";
import "./balance.scss";
import { TiChartLine } from "react-icons/ti";
import { AppContext } from "../../Context/AppContext";

const Balance = () => {
  /*  const { balance } = useContext(AppContext); */
  const { expenses, balance } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.amount);
  }, 0);

  const iconType = totalExpenses > balance ? "down-show" : "up-show";

  return (
    <div className="balance-box">
      <div>
        <h1>CURRENT BALANCE</h1>
        <div className="current-balance">
          <h2>$ {balance - totalExpenses}</h2>
          <div className="balance-icons">
            <TiChartLine className={`arrow-${iconType}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
