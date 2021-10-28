import { double, full, king, queen } from "../../assets";

export const roomInfo = [
  {
    id: 0,
    title: "King One Bed",
    body: [
      "Comfortable King Size Bed",
      "Large Clean Luxurious Room",
      "Beautiful View of Stripe Square",
      "Floor to Ceiling Windows",
      "5 Star Room Service Available",
      "Free 5 Star Breakfast Included",
    ],
    image: king,
    images: [king, queen, full, double],
    price: 500,
  },

  {
    id: 1,
    title: "Queen One Bed",
    body: [
      "Cozy Queen Size Bed",
      "Large Clean Luxurious Room",
      "Beautiful View of the Stripe Bridge",
      "Floor to Ceiling Windows",
      "5 Star Room Service Available",
      "Free 5 Star Breakfast Included",
    ],
    image: queen,
    images: [king, queen, full, double],

    price: 400,
  },
  {
    id: 2,
    title: "Full One Bed",
    body: [
      "Plush Full Size Bed",
      "Large Clean Comfortable Room",
      "Stirring Views of Stripe Square",
      "Floor to Ceiling Windows",
      "5 Star Room Service Available",
      "Free 5 Star Breakfast Included",
    ],
    image: full,
    images: [king, queen, full, double],

    price: 350,
  },
  {
    id: 3,
    title: "Double Two Bed",
    body: [
      "Two Cozy Double Beds",
      "Cozy Clean Room",
      "Views of the Stripe Hotel Restaurant",
      "Floor to Ceiling Windows",
      "Free 5 Star Breakfast Included",
      "5 Star Room Service Available",
    ],
    image: double,
    images: [king, queen, full, double],

    price: 325,
  },
];
