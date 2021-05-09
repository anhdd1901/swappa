import "./SampleProducts.scss";
import ProductButton from "./../../components/ProductButton";
import FunctionButton from "./../../components/FunctionButton";

export default function SampleProducts({ info }) {
  return (
    <div className="row sample-products">
      <div className="col">
        <div className="row title">
          <div className="col">
            <h2>
              {info.titleIcon}{info.titleName}
            </h2>
          </div>
        </div>
        <div className="row menu">
          {info.products.map((value) => (
            <ProductButton key={value.name} info={value} />
          ))}
        </div>
        <div className="row justify-content-center buttons">
          <FunctionButton
            largeBtn={false}
            typ2={false}
            btnName={<i className="fas fa-dollar-sign"></i>}
            btnIcon={`Sell my ${info.productName}`}
          />
          <FunctionButton
            largeBtn={false}
            typ2={false}
            btnName={`More ${info.productName}s`}
            btnIcon={<i className="fas fa-arrow-right"></i>}
          />
        </div>
      </div>
    </div>
  );
}
