import { Outlet } from "react-router";
import { Flex } from "antd";
import { Navbar } from "src/renderer/components/common/Navbar";

export const MenuLayout = () => {
  return (
    <Flex style={{ height: "100vh" }}>
      <Navbar />
      <Outlet />
    </Flex>
  );
};
