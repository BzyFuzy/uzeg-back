import { userAuth, roles } from "../tools";
import { _nav as jNav } from "../views/journalist/routes";
import { _nav as sNav } from "../views/source/routes";
import hlogo from "../assets/img/b-logo.png";
import { useGlobalContext } from "../context";
import { useHistory, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  const { pathname } = useLocation();
  const history = useHistory();
  const listBuilder = () => {
    switch (userAuth.role) {
      case roles.journalist:
        return (
          <ul>
            {jNav.map((menu, index) => (
              <li
                className={pathname === menu.to ? "active" : ""}
                key={"jmenu" + index}
                onClick={() => history.push(menu.to)}
              >
                <div className="icon">
                  <img src={menu.icon} alt={"jmenu-icon" + index} />
                </div>
                <p>{menu.name} </p>
              </li>
            ))}
          </ul>
        );
      case roles.source:
        return (
          <ul>
            {sNav.map((menu, index) => (
              <li
                className={pathname === menu.to ? "active" : ""}
                key={"jmenu" + index}
                onClick={() => history.push(menu.to)}
              >
                <div className="icon">
                  <img src={menu.icon} alt={"jmenu-icon" + index} />
                </div>
                <p>{menu.name} </p>
              </li>
            ))}
          </ul>
        );
      default:
        return (
          <ul>
            <li>
              <p>Developing...</p>
            </li>
          </ul>
        );
    }
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? "" : "closed"}`}>
      <img className="logo" src={hlogo} alt="slogo" />
      {listBuilder()}
    </div>
  );
};

export default Sidebar;
