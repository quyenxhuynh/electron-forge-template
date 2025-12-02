import { Outlet } from "react-router";
import { Flex, Splitter } from "antd";
import { Navbar } from "src/renderer/components/common/Navbar";

export const MenuLayout = () => {
  return (
    <Flex style={{ height: "100vh" }}>
      <Splitter>
        <Splitter.Panel defaultSize={180}>
          <Navbar />
        </Splitter.Panel>
        <Splitter.Panel>
          <Outlet />
        </Splitter.Panel>
      </Splitter>
    </Flex>
  );
};
