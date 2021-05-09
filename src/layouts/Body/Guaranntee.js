import "./Guaranntee.scss";

export default function Guaranntee() {
  return (
    <div className="row guarantee">
      <div className="col-lg-3 d-none d-lg-block">
        <i className="far fa-handshake"></i>
        {` People Powered`}
      </div>
      <div className="d-none d-sm-block col-sm-4 col-lg-3">
        <i className="fab fa-paypal"></i>
        {` PayPal Protection`}
      </div>
      <div className="col-6 col-sm-4 col-lg-3">
        <i className="fas fa-truck"></i>
        {` Free Shipping`}
      </div>
      <div className="col-6 col-sm-4 col-lg-3">
        <i className="fas fa-ban"></i>
        {` No Junk, No Jerks`}
      </div>
    </div>
  );
}
