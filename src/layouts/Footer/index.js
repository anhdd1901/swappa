import "./index.scss";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(133, 133, 133)" }}>
      <div className="container footer">
        <div className="row menu">
          <ul className="col-6 col-sm-4 col-lg-2">
            <li>Buy</li>
            <li>Buyer's Guide</li>
            <li>Buy Phones</li>
            <li>Buy Tablets</li>
            <li>MacBooks</li>
            <li>Buy Laptops</li>
          </ul>
          <ul className="col-6 col-sm-4 col-lg-2">
            <li>Buy iPhones</li>
            <li>Buy Video Games</li>
            <li>Buy Watches</li>
            <li>Buy Cameras</li>
            <li>Buy Home Tech</li>
            <li>Unlocked Phones</li>
          </ul>
          <ul className="col-6 col-sm-4 col-lg-2">
            <li>Sell</li>
            <li>How to Sell</li>
            <li>Sell iPhones</li>
            <li>Sell Phone</li>
            <li>Sell Tablet</li>
            <li>Set Laptop</li>
          </ul>
          <ul className="col-6 col-sm-4 col-lg-2">
            <li>Swappa Local</li>
            <li>Phone Plans</li>
            <li>Phone Deals</li>
            <li>Carries, Reviewers</li>
            <li>Phone Repair</li>
            <li>Phone Finder</li>
          </ul>
          <ul className="col-6 col-sm-4 col-lg-2">
            <li>Help, FAQs</li>
            <li>IMEI / ESN Check</li>
            <li>B2B Exchange</li>
            <li>Protection Plans</li>
            <li>Affiliate Program</li>
            <li>Swappa vs. eBay</li>
          </ul>
          <ul className="col-6 col-sm-4 col-lg-2">
            <li>About Swappa</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Press, Reviews</li>
            <li>Policies, Fees</li>
            <li>Term of Use</li>
          </ul>
        </div>
        <div className="row align-items-center lower">
          <div className="col-12 col-md-4 logo" style={{ marginLeft: "-10px" }}>
            <img
              src="https://static.swappa.com/static/images/logos/swappa_footer.svg"
              alt="logo-footer"
            ></img>
          </div>
          <div className="col-12 col-md-4">
            <div className="row justify-content-start margin link">
              <i className="fab fa-twitter-square padding col-auto"></i>
              <i className="fab fa-facebook col-auto padding"></i>
              <i className="fab fa-instagram col-auto padding"></i>
              <i className="fab fa-youtube-square col-auto padding"></i>
              <i className="fab fa-pinterest-square col-auto padding"></i>
              <i className="fab fa-linkedin col-auto padding"></i>
            </div>
          </div>
          <div className="col-12 col-md-4 copyright">
            Copyright © 2010 - 2021 Swappa, LLC
          </div>
        </div>
      </div>
    </div>
  );
}
