import "./header.scss";
import icon1 from "../../img/icon1.png";
import DateHeader from "./date-header";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-text">
        <img src={icon1} />
        <div className="logo">
          <h1>MiBA</h1>
          <h4>My Budget App</h4>
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
