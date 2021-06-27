import "./balance.scss";
import { TiArrowUp } from "react-icons/ti";
import { TiArrowDown } from "react-icons/ti";

const Balance = () => {
  return (
    <div className="balance-box">
      <div>
        <h1>CURRENT BALANCE</h1>
        <div className="current-balance">
          <h2>$ 100.00</h2>
          <div className="balance-icons">
            <TiArrowUp className="arrow-up" />
            <TiArrowDown className="arrow-down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
