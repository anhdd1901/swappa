const initialState = [
  {
    hidden: false,
    name: "iPhones",
    image:
      "https://static.swappa.com/static/images/categories/square/category_iphones.png",
  },
  {
    hidden: false,
    name: "Phones",
    image:
      "https://static.swappa.com/static/images/categories/square/category_phones.png",
  },
  {
    hidden: false,
    name: "Laptops",
    image:
      "https://static.swappa.com/static/images/categories/square/category_laptops.png",
  },
  {
    hidden: false,
    name: "Watches",
    image:
      "https://static.swappa.com/static/images/categories/square/category_watches.png",
  },
  {
    hidden: false,
    name: "Video Games",
    image:
      "https://static.swappa.com/static/images/categories/square/category_gaming.png",
  },
  {
    hidden: true,
    name: "Tablets",
    image:
      "https://static.swappa.com/static/images/categories/square/category_tablets.png",
  },
  {
    hidden: true,
    name: "Home Tech",
    image:
      "https://static.swappa.com/static/images/categories/square/category_home_tech.png",
  },
  {
    hidden: true,
    name: "Cameras",
    image:
      "https://static.swappa.com/static/images/categories/square/category_cameras.png",
  },
  {
    hidden: false,
    name: "Phone Plans",
    image:
      "https://static.swappa.com/static/images/categories/square/category_carriers.png",
  },
];

export default function productLineList(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
