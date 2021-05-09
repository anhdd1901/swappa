import "./index.scss";
import Divider from "./../../components/Divider";
import Guaranntee from "./Guaranntee";
import ProductLine from "./ProductLine";
import SponsorMenu from "./SponsorMenu";
import FeaturedProduct from "./FeaturedProduct";
import SampleProducts from "./SampleProducts";
import RecognizedMenu from "./RecognizedMenu";
import CommentAndRating from "./CommentAndRating";

import { useSelector } from "react-redux";

export default function Body() {
  const sampleProducts = useSelector((state) => state.sampleProducts);
  return (
    <div className="container">
      <div className="row">
        <h1 className="col sologan">
          Buy and sell new<em style={{ marginLeft: "-2px" }}>ish</em> tech
          <br></br>
          <p>Safe, friendly marketplace with no junk, less fees</p>
        </h1>
      </div>
      <Divider />
      <Guaranntee />
      <Divider />
      <ProductLine />
      <Divider />
      <SponsorMenu />
      <Divider />
      <FeaturedProduct />
      <Divider />
      {sampleProducts.map((value) => (
        <div key={value.titleName}>
          <SampleProducts info={value} />
          <Divider />
        </div>
      ))}
      <div className="row">
        <div className="col recognized-title">
          <h2>Recognized for value and safety</h2>
        </div>
      </div>
      <RecognizedMenu />
      <CommentAndRating />
      <Divider />
      <div className="row justify-content-center disclosure">
        <div>
          Disclosure: This site contains affiliate links to other sites. We may
          receive commissions for purchases made through these links.
        </div>
      </div>
    </div>
  );
}
