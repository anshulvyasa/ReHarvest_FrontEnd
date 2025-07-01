import { Heart, Leaf, Recycle, ShoppingCart, Wrench } from "lucide-react";

export const edible_section = [
  {
    heading: "Resell at Discount",
    description: "Safe, edible items sold in imperfect product sections",
    Icon: Recycle,
  },
  {
    heading: "Donate to Communities",
    description: "Food banks, NGOs, and community kitchens receive donations",
    Icon: Heart,
  },
  {
    heading: "Upcycle Into New Products",
    description: "Transform into innovative food products",
    Icon: Wrench,
  },
  {
    heading: "Convert to Compost",
    description: "Spoiled items become nutrient-rich soil amendments",
    Icon: Leaf,
  },
];

export const non_edible_section = [
  {
    heading: "Refurbish & Resell",
    description: "Repairable items become certified second-hand products",
    Icon: Wrench,
  },
  {
    heading: "Salvage Components",
    description: "Extract and reuse valuable parts from damaged items",
    Icon: ShoppingCart,
  },
  {
    heading: "Responsible Recycling",
    description: "Unusable items processed through proper recycling channels",
    Icon: Recycle,
  },
];
