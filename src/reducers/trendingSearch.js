const initialState = [
  {
    name: "PlayStation 5",
    icon: <i className="fas fa-gamepad"></i>,
  },
  {
    name: "iPhone 12",
    icon: <i className="fas fa-mobile-alt"></i>,
  },
  {
    name: "iPhone 11",
    icon: <i className="fas fa-mobile-alt"></i>,
  },
  {
    name: "iPhone 11 Pro",
    icon: <i className="fas fa-mobile-alt"></i>,
  },
  {
    name: "iPhone 8",
    icon: <i className="fas fa-mobile-alt"></i>,
  },
  {
    name: "Google Pixel 5",
    icon: <i className="fas fa-mobile-alt"></i>,
  },
  {
    name: "Unlocked Cell Phones",
    icon: <i className="fas fa-mobile-alt"></i>,
  },
  {
    name: "MacBooks",
    icon: <i className="fas fa-laptop"></i>,
  },
  {
    name: "Phone Deals",
    icon: <i className="fas fa-mobile-alt"></i>,
  },
  {
    name: "Phone Repair",
    icon: <i className="fas fa-search"></i>,
  },
];

export default function trendingSearch(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
