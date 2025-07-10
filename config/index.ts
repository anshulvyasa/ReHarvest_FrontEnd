import { Variants } from "framer-motion";
import { Brain, ChartLine, Leaf, Recycle, Star, Users } from "lucide-react";
import { CiMail } from "react-icons/ci";
import { FiTarget, FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";

export const howItWorks = [
  {
    icon: Brain,
    iconbg: "#E1EBFF",
    iconcolor: "#1242B5",
    number: "01",
    title: "AI Detection",
    description:
      "Computer vision analyzes produce quality, categorizes imperfections and determines optimal use in real-time",
  },
  {
    icon: FiTarget,
    number: "02",
    iconbg: "#CDF4CA",
    iconcolor: "#00B219",
    title: "Redirect to Use",
    description:
      "Computer vision analyzes produce quality, categorizes imperfections and determines optimal use in real-time",
  },
  {
    icon: ChartLine,
    number: "03",
    iconbg: "#F3E9CC",
    iconcolor: "#D4A53E",
    title: "Track carbon & impact",
    description:
      "Computer vision analyzes produce quality, categorizes imperfections and determines optimal use in real-time",
  },
];

export const realTimeDashboardCard = [
  {
    icon: Leaf,
    iconcolor: "#388E3C",
    performanceIcon: "/performanelan.png",
    performanceLabel: "+1.2%",
    title: 152450,
    titleLabel: "Kg",
    footer: "CO2 Saved",
  },
  {
    icon: Recycle,
    iconcolor: "#4CAF50",
    performanceIcon: "/performanelan.png",
    performanceLabel: "+1.2%",
    title: 2450,
    titleLabel: "tons",
    footer: "Tons Rescued",
  },
  {
    icon: Star,
    iconcolor: "#FFEB3B",
    performanceIcon: "/performanelan.png",
    performanceLabel: "+1.2%",
    title: 152450,
    titleLabel: "pts",
    footer: "GreenPoints",
  },
  {
    icon: Users,
    iconcolor: "#2196F3",
    performanceIcon: "/performanelan.png",
    performanceLabel: "+1.2%",
    title: 152,
    titleLabel: "",
    footer: "Active Partners",
  },
];

export const landingpageBarGraph = [
  { name: "Jan", impact: 63 },
  { name: "Feb", impact: 37 },
  { name: "Mar", impact: 18 },
  { name: "Apr", impact: 31 },
  { name: "May", impact: 85 },
];

export const landingpagePieChartData = [
  { name: "Retailer", value: 166.7 },
  { name: "Agencies", value: 169.71 },
  { name: "Kitchen", value: 177.95 },
  { name: "NGOs", value: 106.39 },
];

export const clients = [
  "TechCorp",
  "InnovateLab",
  "DataFlow",
  "CloudSync",
  "DevTools",
  "SmartWork",
  "NextGen",
  "CodeBase",
  "WorkFlow",
  "TeamSync",
  "ProActive",
  "DigitalEdge",
];

export const navbarLink = [
  {
    href: "#",
    title: "About",
  },
  {
    href: "#",
    title: "Contact",
  },
  {
    href: "#",
    title: "ESG Report",
  },
  {
    href: "#",
    title: "Sustainability Goals",
  },
];

export const trustedPartnerFooter = [
  {
    amount: 50,
    label: "+",
    title: "Active Partner",
  },
  {
    amount: 500,
    label: "K+",
    title: "Active Member",
  },
  {
    amount: 15,
    label: "M+",
    title: "Users",
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
    action: "",
  },
  {
    id: "logout",
    title: "Log Out",
    src: "/sidebarlogout.png",
    action: "logout",
  },
  {
    id: "setting",
    title: "Settings",
    src: "/sidebarsetting.png",
    action: "",
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
