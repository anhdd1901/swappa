import "./ProductLine.scss";
import ProductLineButton from "../../components/ProductLineButton";
import FunctionButton from "../../components/FunctionButton";

import { useSelector } from "react-redux";

export default function ProductLine() {
  const productLineList = useSelector((state) => state.productLineList);
  return (
    <div className="row product-line-menu">
      <div className="col-12">
        <div className="row">
          {productLineList.map((value) => (
            <ProductLineButton key={value.name} info={value} />
          ))}
        </div>
      </div>
      <div className="col-12">
        <div className="row product-line-menu-button justify-content-center">
          <FunctionButton
            largeBtn={true}
            type2={false}
            btnName={<i className="fas fa-map-marker-alt"></i>}
            btnIcon="Swappa Local"
          />
          <FunctionButton
            largeBtn={true}
            type2={true}
            btnName="Sell with Swappa"
            btnIcon={<i className="fas fa-dollar-sign"></i>}
          />
        </div>
      </div>
    </div>
  );
}
