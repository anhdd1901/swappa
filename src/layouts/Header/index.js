import "./index.scss";
import SearchBar from "./SearchBar";
import UpperHeaderMenu from "./UpperHeaderMenu";
import Divider from "./../../components/Divider";
import LowerHeaderMenuButton from "./../../components/LowerHeaderMenuButton";
import UpperHeaderMenuButton from "./../../components/UpperHeaderMenuButton";
import DropdownMenu from "./DropdownMenu";

import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header() {
  const lowerHeaderMenuList = useSelector((state) => state.lowerHeaderMenuList);
  const [isDropdownMenuShown, setIsDropdownMenuShown] = useState(false);
  const showDropdownMenu = (targetedShownStatus) =>
    setIsDropdownMenuShown(targetedShownStatus);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div className="row justify-content-between upper-header">
        <div className="col-auto">
          <div className="row align-items-center height">
            <div className="col upper-header-logo">
              <img
                src="https://static.swappa.com/static/images/logos/logo_swappa_nav.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="d-block d-md-none col-auto">
          <div className="row height align-items-center">
            <div className="col-12">
              <UpperHeaderMenuButton
                dropdownButton={true}
                currentShownStatus={isDropdownMenuShown}
                showDropdownMenu={showDropdownMenu}
                type2={true}
                content={
                  <div>
                    <i className="fas fa-bars"></i>
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className="d-none d-md-block col">
          <SearchBar />
        </div>
        <div className="d-none d-md-block col-auto">
          <UpperHeaderMenu />
        </div>
      </div>
      <div className="row d-block d-md-none">
        <div className="col-12">
          <SearchBar />
        </div>
      </div>
      <div className="row d-none d-md-block">
        <div className="col-12">
          <Divider />
        </div>
      </div>
      <div className="row d-none d-md-block lower-header justify-content-start">
        {lowerHeaderMenuList.map((value) => (
          <LowerHeaderMenuButton key={value.btnName} info={value} />
        ))}
      </div>
      <DropdownMenu isShown={isDropdownMenuShown} />
    </div>
  );
}
