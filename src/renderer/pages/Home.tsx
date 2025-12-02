import { Button } from "antd";
import { PageLayout } from "@/renderer/layouts/PageLayout";

export const Home = () => {
  const handleButtonClick = async () => {
    const result = await window.api.selectFolder();
    console.log(result);
  };
  return (
    <PageLayout title="Home">
      <Button type="primary" style={{ width: 200 }} onClick={handleButtonClick} >
        Select folder
      </Button>
    </PageLayout>
  );
};
