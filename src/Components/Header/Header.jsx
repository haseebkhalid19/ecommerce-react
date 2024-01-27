import "./Header.css";
import { Logo, appImg } from "../../img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header>
        <div id="topNav">
          <ul>
            <li>
              <a href="#" class="active">
                {" "}
                SAVE MORE ON APP{" "}
              </a>
            </li>
            <li>
              <a href="#"> DARAZ AFFILIATE PROGRAM </a>
            </li>
            <li>
              <a href="#"> SELL ON DARAZ </a>
            </li>
            <li>
              <a href="#"> CUSTOMER CARE </a>
            </li>
            <li>
              <a href="#"> TRACK MY ORDER </a>
            </li>
            <li>
              <a href="#"> LOGIN </a>
            </li>
            <li>
              <a href="#"> SIGNUP </a>
            </li>
            <li>
              <a href="#"> زبان تبدیل کریں </a>
            </li>
          </ul>
        </div>

        <div class="searchHeader">
          <ul>
            <li>
              <a href="#">
                <img src={Logo} alt="Site Logo" width={100} />
              </a>
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
              <a href="#">
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
