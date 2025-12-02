import { Menu } from "antd";
import { NavLink } from "react-router";
import AppRoutes from "src/renderer/constants/AppRoutes";

export const Navbar = () => {
  const items = AppRoutes.filter((route) => !route.hideFromNav).map(
    (route) => ({
      key: route.id,
      icon: route.icon ? <route.icon /> : null,
      label: <NavLink to={route.path}>{route.name}</NavLink>,
    })
  );
  return <Menu style={{ minWidth: 160 }} items={items} />;
};
