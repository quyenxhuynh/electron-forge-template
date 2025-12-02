import { Flex } from "antd";
import { Typography } from "antd";

interface PageLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const { Text } = Typography;

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <Flex
      style={{
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 24,
        marginRight: 24,
        width: "100%",
      }}
      vertical
    >
      {title && (
        <Text strong style={{ fontSize: 32, marginBottom: 8 }}>
          {title}
        </Text>
      )}
      {children}
    </Flex>
  );
};
