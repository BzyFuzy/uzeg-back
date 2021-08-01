import React from "react";
import {
  jhome,
  jinfo,
  lChart,
  fPlus,
} from "../../assets/icons";

const Home = React.lazy(() => import("./journalists"));
const Fact = React.lazy(() => import("./fact"));
const News = React.lazy(() => import("./news"));
const Report = React.lazy(() => import("./report"));



const routes = [
  { path: "/", exact: true, name: "home" },
  { path: "/home", name: "home", component: Home },
  { path: "/fact", name: "fact", component: Fact },
  { path: "/news", name: "fact", component: News },
  { path: "/report", name: "fact", component: Report },
  
];
export default routes;

export const _nav = [
  {
    name: "Сэтгүүлчдийн мэдээлэл",
    to: "/home",
    icon: jhome,
  },
  {
    name: "Баримт, мэдээлэл өгөх",
    to: "/fact",
    icon: jinfo,
  },
  {
    name: "Шинэ мэдээ мэдээлэл",
    to: "/news",
    icon: fPlus,
  },
  {
    name: "Тайлан",
    to: "/report",
    icon: lChart,
  }
];
