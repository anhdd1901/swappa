const initialState = [
  {
    name: "Apple Watch Series 5 40mm",
    image:
      "https://static.swappa.com/images/cache/be/fd/befdd494c173dd26714eae7a5d7eb1c5.png",
    price: 180,
    os: <i className="fab fa-apple"></i>,
  },
  {
    name: "Apple iPhone X",
    image:
      "https://static.swappa.com/images/cache/91/de/91dec1893845dad70aa430166070fdf4.png",
    price: 275,
    os: <i className="fab fa-apple"></i>,
  },
  {
    name: "Google Pixel 3 XL",
    image:
      "https://static.swappa.com/images/cache/ad/30/ad30895cc5adcbe802b597c4b2e16012.png",
    price: 105,
    os: <i className="fab fa-android"></i>,
  },
  {
    name: "OnePlus 7 Pro",
    image:
      "https://static.swappa.com/images/cache/6a/b5/6ab542fc73a301391b7b7f3a483753c2.png",
    price: 194,
    os: <i className="fab fa-android"></i>,
  },
  {
    name: "Samsung Galaxy S10",
    image:
      "https://static.swappa.com/images/cache/d8/8e/d88e727df3ccd5ccdd3c0e6a0c0940d2.png",
    price: 279,
    os: <i className="fab fa-android"></i>,
  },

  {
    name: "Nintendo Switch",
    image:
      "https://static.swappa.com/images/cache/9d/d0/9dd0a62f8e05fe338c41fbb9cdf48c12.png",
    price: 300,
    os: <i className="fas fa-gamepad"></i>,
  },
];

export default function featuredProductsList(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
