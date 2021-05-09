const initialState = [
  {
    name: "WJS",
    image: "https://static.swappa.com/static/images/press/press_wsj.png",
  },
  {
    name: "The NY Times",
    image: "https://static.swappa.com/static/images/press/press_newyorktimes.png",
  },
  {
    name: "Fortune",
    image: "https://static.swappa.com/static/images/press/press_fortune.png",
  },

  {
    name: "Tom's Guide",
    image: "https://static.swappa.com/static/images/press/press_tomsguide.png",
  },
  {
    name: "Life Hacker",
    image: "https://static.swappa.com/static/images/press/press_lifehacker.png",
  },
  {
    name: "CNet",
    image: "https://static.swappa.com/static/images/press/press_cnet.png",
  },
];

export default function recognizerList(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
