import "./style/header.scss";
import icon2 from "../../img/icon2.png";
import DateHeader from "./date-header";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-text">
        <img src={icon2} />
        <div className="logo">
          <h1>gitCoin</h1>
          <h4>push and pull your coins!</h4>
        </div>
      </div>
      <div className="links">
        <ul>Register</ul>
        <ul>Log in</ul>
        <ul>Log out</ul>
      </div>
      <DateHeader />
    </div>
  );
};

export default Header;
