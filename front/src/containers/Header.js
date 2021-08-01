import { burger, help, logout, mail } from "../assets/icons";
import { useGlobalContext } from "../context";
import { userAuth } from "../tools";

const Header = () => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <div className="navbar">
      <img className="burger" src={burger} onClick={() => toggleSidebar()} alt="burger"/>
      <div className="icons">
        <img src={mail} alt="mail"/>
        <img src={help} alt="help"/>
        <img src={logout} alt="logout" onClick={() => userAuth.signout()}/>
      </div>
    </div>
  );
};

export default Header;
