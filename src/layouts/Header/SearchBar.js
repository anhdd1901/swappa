import "./SearchBar.scss";
import Divider from "../../components/Divider";

import { useSelector } from "react-redux";

export default function SearchBar() {
  const trendingSearch = useSelector((state) => state.trendingSearch);
  return (
    <div className="row margin align-items-center height width">
      <div className="col upper-header-search-bar padding">
        <input placeholder="Search for phones, tablets, laptops and more..."></input>
        <ul>
          <li className="trending-searches">Trending Searches</li>
          <div className="trending-searches-divider">
            <Divider />
          </div>
          {trendingSearch.map((x) => (
            <li key={x.name}>
              {x.icon} {x.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-auto upper-header-search-button">
        <div className="row align-items-center height">
          <div className="col">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
