const initialState = [
  {
    titleIcon: <i className="fas fa-mobile-alt"></i>,
    titleName: " iPhones & Phones",
    productName:'phone',
    products: [
      {
        name: "Samsung Galaxy S9",
        image:
          "https://static.swappa.com/images/cache/2a/1e/2a1eb5fb0ad3694d0f75b68fc9e0a2d9.png",
        price: 155,
        os: <i className="fab fa-android"></i>,
      },
      {
        name: "Apple iPhone 7",
        image:
          "https://static.swappa.com/images/cache/d5/cd/d5cdcfad09c616b0b9e907c455c7a664.png",
        price: 105,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: "Samsung Galaxy S10",
        image:
          "https://static.swappa.com/images/cache/d8/8e/d88e727df3ccd5ccdd3c0e6a0c0940d2.png",
        price: 279,
        os: <i className="fab fa-android"></i>,
      },
      {
        name: "Samsung Galaxy S9 Plus",
        image:
          "https://static.swappa.com/images/cache/56/e5/56e5e7d3eb5c1673f7894ca273efab75.png",
        price: 185,
        os: <i className="fab fa-android"></i>,
      },
      {
        name: "Apple iPhone SE 2nd Gen",
        image:
          "https://static.swappa.com/images/cache/7a/92/7a925e338d652b415990dd6bf3f4d57b.png",
        price: 210,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: "Apple iPhone 8",
        image:
          "https://static.swappa.com/images/cache/ae/d6/aed6b6696fa00664c04651626f69571f.png",
        price: 159,
        os: <i className="fab fa-apple"></i>,
      },
    ],
  },
  {
    titleIcon: <i className="fas fa-tablet-alt"></i>,
    titleName: " iPads & Tablets",
    productName:'tablet',
    products: [
      {
        name: 'Apple iPad Pro 12.9" 4th Gen 2020',
        image:
          "https://static.swappa.com/images/cache/93/cb/93cb624ad935736f94a947c18101a1dd.png",
        price: 799,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: 'Apple iPad Pro 11" 2nd Gen 2020',
        image:
          "https://static.swappa.com/images/cache/77/ac/77ac7abe4d910f7cb673ee9a759eed12.png",
        price: 620,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: "Apple iPad Ari 4th Gen",
        image:
          "https://static.swappa.com/images/cache/33/8b/338be88405f16c6dd32916910ab50634.png",
        price: 375,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: 'Apple iPad Pro 12.9" 3rd Gen 2020',
        image:
          "https://static.swappa.com/images/cache/a5/81/a5814d997524f33db84eee815857e4f0.png",
        price: 699,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: 'Apple iPad Pro 11" 2018',
        image:
          "https://static.swappa.com/images/cache/1a/1d/1a1db771b2834de93e760168e00c9477.png",
        price: 465,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: 'Apple iPad Pro 12.9" 2nd Gen 2017',
        image:
          "https://static.swappa.com/images/cache/6d/74/6d741f0a492f5c8e93de18fdd0f47d75.png",
        price: 439,
        os: <i className="fab fa-apple"></i>,
      },
    ],
  },
  {
    titleIcon: <i className="fas fa-tablet-alt"></i>,
    titleName: " MacBooks & Laptops",
    productName:'laptop',
    products: [
      {
        name: 'MacBook Pro 2019 - 16"',
        image:
          "https://static.swappa.com/images/cache/ec/b8/ecb8b2dce1fed1c2cc735f1ccd27f0b6.png",
        price: 1535,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: 'MacBook Pro 2020 - 13"',
        image:
          "https://static.swappa.com/images/cache/23/79/237934661f4b9ee4c6213ed2a224715c.png",
        price: 885,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: 'MacBook Pro 2015 (Retina) - 15"',
        image:
          "https://static.swappa.com/images/cache/28/9d/289df0bb882292430ff64e9d72369523.png",
        price: 650,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: "Google Pixelbook",
        image:
          "https://static.swappa.com/images/cache/67/08/6708e840d176149c609f9cd3a7b3dc3c.png",
        price: 330,
        os: <i className="fab fa-chrome"></i>,
      },
      {
        name: 'MacBook Air 2020 - 13"',
        image:
          "https://static.swappa.com/images/cache/6c/d6/6cd6e32c4e5b417273b94e2dc9c01079.png",
        price: 765,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: 'MacBook Pro 2016 (With touch Bar) - 15"',
        image:
          "https://static.swappa.com/images/cache/ef/6a/ef6a8a4d6f68f87f556807af16ebfd40.png",
        price: 849,
        os: <i className="fab fa-apple"></i>,
      },
    ],
  },
  {
    titleIcon: <i className="far fa-clock"></i>,
    titleName: " Watches & Wearables",
    productName:'wearable',
    products: [
      {
        name: "Samsung Galaxy Watch 42mm",
        image:
          "https://static.swappa.com/images/cache/07/c9/07c911454e8d196d863c7ded66eb04d5.png",
        price: 80,
        os: "",
      },
      {
        name: "Apple Watch Series 5 40mm",
        image:
          "https://static.swappa.com/images/cache/be/fd/befdd494c173dd26714eae7a5d7eb1c5.png",
        price: 180,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: "Apple Watch Series 6 44mm",
        image:
          "https://static.swappa.com/images/cache/8b/04/8b04c4c013aaa5612c490eca235750d8.png",
        price: 339,
        os: <i className="fab fa-apple"></i>,
      },
      {
        name: "Apple Watch Series 3 42mm",
        image:
          "https://static.swappa.com/images/cache/c1/8a/c18a05a1296bfc9eca2987bae2e0330c.png",
        price: 135,
        os: <i className="fab fa-chrome"></i>,
      },
      {
        name: "Samsung Galaxy Watch 46mm",
        image:
          "https://static.swappa.com/images/cache/be/d6/bed6b63453c3365165d155d6a3dab8e7.png",
        price: 105,
        os: "",
      },
      {
        name: "Samsung Galaxy Watch 3",
        image:
          "https://static.swappa.com/images/cache/a3/df/a3df0190a355ddfed3ca3c0e9dbf8a72.png",
        price: 199,
        os: "",
      },
    ],
  },
];

export default function SampleProducts(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
