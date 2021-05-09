import "./UpperHeaderMenu.scss";
import UpperHeaderMenuButton from "./../../components/UpperHeaderMenuButton";

export default function UpperHeaderMenu() {
  return (
    <div className="row height align-items-center justify-content-end margin">
      <div className="col-auto padding">
        <UpperHeaderMenuButton type2={true} content="Sell on Swappa" />
      </div>
      <div className="col-auto padding">
        <UpperHeaderMenuButton type2={false} content="Help" />
      </div>
      <div className="col-auto padding">
        <UpperHeaderMenuButton type2={false} content="Login" />
      </div>
      <div className="col-auto padding">
        <UpperHeaderMenuButton
          type2={true}
          content={
            <div>
              <i className="fas fa-shopping-cart"></i>
              <sup> 0</sup>
            </div>
          }
        />
      </div>
    </div>
  );
}
