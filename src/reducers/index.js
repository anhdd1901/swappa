import { combineReducers } from "redux";

import lowerHeaderMenuList from "./lowerHeaderMenuList";
import trendingSearch from "./trendingSearch";
import productLineList from "./productLineList";
import sponsorList from "./sponsorList";
import featuredProductsList from "./featuredProductsList";
import sampleProducts from "./sampleProducts";
import recognizerList from "./recognizerList";
import comments from "./comments";

export default combineReducers({
  lowerHeaderMenuList,
  trendingSearch,
  productLineList,
  sponsorList,
  featuredProductsList,
  sampleProducts,
  recognizerList,
  comments,
});
