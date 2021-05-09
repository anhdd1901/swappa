import "./FeaturedProduct.scss";
import ProductButton from "./../../components/ProductButton";

import { useSelector } from "react-redux";

export default function FeaturedProduct() {
  const featuredProductsList = useSelector(
    (state) => state.featuredProductsList
  );
  return (
    <div className="row featured-product">
      <div className="col-12 padding">
        <h2>Featured Products</h2>
      </div>
      <div className="col-12 padding">
        <div className="row featured-product-menu">
          {featuredProductsList.map((value) => (
            <ProductButton key={value.name} info={value} />
          ))}
        </div>
      </div>
      <div className="col-12 padding">
        <div className="row">
          <div className="col-12 col-sm-6 featured-product-guarantee">
            <h3>People powered</h3>
            <div>
              On Swappa you buy and sell directly with other users. Cutting out
              the middleman means you join a community market with the best
              prices and highest value.
            </div>
          </div>
          <div className="col-12 col-sm-6 featured-product-guarantee">
            <h3>No junk, no jerks</h3>
            <div>
              To keep our marketplace safe, we don’t allow broken items. Every
              product has listing requirements and an approval process to ensure
              confident shopping.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
