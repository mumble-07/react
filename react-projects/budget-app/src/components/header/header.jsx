import "./header.scss";
import icon1 from "../../img/icon1.png";
const Header = () => {
  return (  
    <div className="header">
      <div className="logo">
        <img src={icon1} />
        {/* MiBA */}
        <div>My Budget App</div>
      </div>
      <div className="links">
        <ul>Register</ul>
        <ul>Log in</ul>
        <ul>Log out</ul>
      </div>
    </div>
  );
};

export default Header;
