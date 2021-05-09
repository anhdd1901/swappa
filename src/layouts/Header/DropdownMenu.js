import "./DropdownMenu.scss";
import Divider from "./../../components/Divider";

export default function DropdownMenu({ isShown }) {
  return (
    <div
      id="dropdownMenu"
      className={`row dropdown width margin ${
        isShown ? "display-dropdown" : ""
      }`}
    >
      <div className="col-12 padding">
        <ul className="margin">
          <Divider />
          <li>
            <i className="fas fa-shopping-cart"></i> Cart (0)
          </li>
          <Divider />
          <li>
            Buy <i className="fas fa-caret-right"></i>
          </li>
          <Divider />
          <li>
            Sell <i className="fas fa-caret-right"></i>
          </li>
          <Divider />
          <li>
            Phone Plans <i className="fas fa-signal"></i>
          </li>
          <Divider />
          <li>Swappa Local</li>
          <Divider />
          <li>Help</li>
          <Divider />
          <li>Login</li>
          <Divider />
          <li>Register</li>
          <Divider />
        </ul>
      </div>
    </div>
  );
}
