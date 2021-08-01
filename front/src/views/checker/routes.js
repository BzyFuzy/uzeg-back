import React from "react";
import {
  jhome,
  jsource,
  jinfo,
  jprofile,
  jcalendar,
  jworkspace,
  jeducation,
  janalyst,
} from "../../assets/icons";
const Home = React.lazy(() => import("./home"));
const Source = React.lazy(() => import("./source"));
const Info = React.lazy(() => import("./info"));
const Profile = React.lazy(() => import("./profile"));
const Calendar = React.lazy(() => import("./calendar"));
const WorkSpace = React.lazy(() => import("./workspace"));
const Education = React.lazy(() => import("./education"));
const Analyst = React.lazy(() => import("./analyst"));







const routes = [
  { path: "/", exact: true, name: "home" },
  { path: "/jhome", name: "jhome", component: Home },
  { path: "/jsource", name: "jhome", component: Source },
  { path: "/jinfo", name: "jhome", component: Info },
  { path: "/jprofile", name: "jhome", component: Profile },
  { path: "/jcalendar", name: "jhome", component: Calendar },
  { path: "/jworkspace", name: "jhome", component: WorkSpace },
  { path: "/jeducation", name: "jhome", component: Education },
  { path: "/janalyst", name: "jhome", component: Analyst },
];
export default routes;

export const _nav = [
  {
    name: "Сэтгүүлч",
    to: "/jhome",
    icon: jhome,
  },
  {
    name: "Эх сурвалж",
    to: "/jsource",
    icon: jsource,
  },
  {
    name: "Суурь мэдээлэл",
    to: "/jinfo",
    icon: jinfo,
  },
  {
    name: "Миний булан",
    to: "/jprofile",
    icon: jprofile,
  },
  {
    name: "Ажиглалтын жагсаалт",
    to: "/jcalendar",
    icon: jcalendar,
  },
  {
    name: "Ажлын талбар",
    to: "/jworkspace",
    icon: jworkspace,
  },
  {
    name: "Сургалт хөгжил",
    to: "/jeducation",
    icon: jeducation,
  },
  {
    name: "Аналитик",
    to: "/janalyst",
    icon: janalyst,
  },
];
