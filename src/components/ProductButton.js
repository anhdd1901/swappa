import "./ProductButton.scss";

export default function ProductButton({ info }) {
  return (
    <div className="col-6 col-sm-4 col-lg-2">
      <div className="row product-button margin">
        <div className="col-12 padding product-button-image">
          <img src={info.image} alt={info.name}></img>
        </div>
        <div className="col-12 padding product-button-name">{info.name}</div>
        <div className="col-12">
          <div className="row justify-content-between">
            <div className="col-auto padding product-button-price">${info.price}+</div>
            <div className="col-auto padding product-button-os">{info.os}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
