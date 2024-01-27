import "./Header.css";
import { Logo, appImg } from "../../img";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header>
        <div id="topNav">
          <ul>
            <li>
              <a href="javascript:void(0)" className="active">
                {" "}
                SAVE MORE ON APP{" "}
              </a>
            </li>
            <li>
              <a href="javascript:void(0)"> DARAZ AFFILIATE PROGRAM </a>
            </li>
            <li>
              <a href="javascript:void(0)"> SELL ON DARAZ </a>
            </li>
            <li>
              <a href="javascript:void(0)"> CUSTOMER CARE </a>
            </li>
            <li>
              <a href="javascript:void(0)"> TRACK MY ORDER </a>
            </li>
            <li>
              <a href="javascript:void(0)"> LOGIN </a>
            </li>
            <li>
              <a href="javascript:void(0)"> SIGNUP </a>
            </li>
            <li>
              <a href="javascript:void(0)"> زبان تبدیل کریں </a>
            </li>
          </ul>
        </div>

        <div className="searchHeader">
          <ul>
            <li>
              <NavLink to={`/`}>
                <img src={Logo} alt="Site Logo" width={100} />
              </NavLink>
            </li>
            <li>
              <input
                type="search"
                name="searchBar"
                id="searchBar"
                placeholder="Search in Daraz"
              />
            </li>
            <li>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faShoppingCart} />
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src={appImg} alt="app image" width={200} />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
