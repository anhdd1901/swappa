import "./ProductLineButton.scss";

export default function ProductLineButton({ info }) {
  return (
    <div
      className={`${
        info.hidden
          ? "d-none d-sm-block d-lg-none col-4"
          : "col-6 col-sm-4 col-lg-2"
      } product-line-button`}
    >
      <div
        className={`${
          info.name === "Cameras" ? "hover-special" : ""
        } row product-line-button-image`}
      >
        <img src={info.image} alt={info.name}></img>
      </div>
      <div className="row justify-content-center product-line-button-name">
        {info.name}
      </div>
    </div>
  );
}
