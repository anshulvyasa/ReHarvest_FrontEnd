import { Variants } from "framer-motion";
import { Heart, Leaf, Recycle, ShoppingCart, Wrench } from "lucide-react";
import { CiMail } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";

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

export const signUpCredentials = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
    icon: FiUser,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "example@gmail.com",
    icon: CiMail,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Create a Password",
    icon: IoLockClosedOutline,
  },
  {
    id: "confirm_password",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm Your Password",
    icon: IoLockClosedOutline,
  },
];

export const Signin_Form_Data = [
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "example@gmail.com",
    icon: CiMail,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Your Password",
    icon: IoLockClosedOutline,
  },
];

export const SideBarContentData = [
  {
    id: "home",
    title: "Home",
    href: "/app/home",
    src: "/sidebarhomeicon.png",
  },
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/app/dashboard",
    src: "/sidebardashboardicon.png",
  },
  {
    id: "marketplace",
    title: "MarketPlace",
    href: "/app/marketplace",
    src: "/sidebarmarketplaceicon.png",
  },
  {
    id: "donateitem",
    title: "Donate Items",
    href: "/app/donate-item",
    src: "/sidebardonateitemicon.png",
  },
];

export const sidebarFooterContent = [
  {
    id: "myprofile",
    title: "My Profile",
    src: "/sidebarmyprofile.png",
  },
  {
    id: "logout",
    title: "Log Out",
    src: "/sidebarlogout.png",
  },
  {
    id: "setting",
    title: "Settings",
    src: "/sidebarsetting.png",
  },
];

export const impactOverviewSustanabilityData = [
  {
    id: "co2saved",
    percentage: "+1.2%",
    iconSrc: "/leaf.png",
    amount: "2,450",
    label: "Kg",
    footer: "CO₂ Saved",
    iconbg: "#E4F5E5",
  },
  {
    id: "recycle",
    percentage: "+1.2%",
    iconSrc: "/recycle.png",
    amount: "1,203",
    label: "Pts",
    footer: "Food rescued",
    iconbg: "#D4E3FE",
  },
  {
    id: "points",
    percentage: "+1.2%",
    iconSrc: "/points.png",
    amount: "42,450",
    label: "Kg",
    footer: "GreenPoints",
    iconbg: "#F6ECCF",
  },
  {
    id: "delete",
    percentage: "+1.2%",
    iconSrc: "/delete.png",
    amount: "1,240",
    label: "Kg",
    footer: "Waste produced",
    iconbg: "#FACCC4",
  },
];

export const dashboardBarChartData = [
  { day: "Mon", value: 300 },
  { day: "Tue", value: 180 },
  { day: "Wed", value: 220 },
  { day: "Thu", value: 160 },
  { day: "Fri", value: 270 },
  { day: "Sat", value: 320 },
  { day: "Sun", value: 70 },
];

export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export const popUpVarient: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};
