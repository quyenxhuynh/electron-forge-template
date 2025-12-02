import { HashRouter, Routes, Route } from "react-router";
import { MenuLayout } from "@/renderer/layouts/MenuLayout";
import AppRoutes from "@/renderer/constants/AppRoutes";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MenuLayout />}>
          {AppRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={<route.element />} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
};
