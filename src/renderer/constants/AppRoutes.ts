import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

import AppRoute from "src/renderer/models/AppRoute";
import { Home } from "src/renderer/pages/Home";
import { About } from "src/renderer/pages/About";

const AppRoutes: AppRoute[] = [
  {
    id: "home",
    name: "Home",
    path: "/",
    element: Home,
    icon: FaHome,
  },
  {
    id: "about",
    name: "About",
    path: "/about",
    element: About,
    icon: IoMdPerson,
  }
];

export default AppRoutes;