import { Tabs } from "@mantine/core";
import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { PRODUCT_PAGE_TAB } from "../../../constants";

const ProductLayout = () => {
  const [activeTab, setActiveTab] = useState("first");
  const navigate = useNavigate();
  const params = useParams();

  const handleTabChange = (value: string | null) => {
    if (value !== null) {
      setActiveTab(value);
      navigate(`/products/${params["product-id"]}/${value}`);
    }
    navigate(`/products/${params["product-id"]}/${value}`);
  };

  return (
    <>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tabs.List>
          {PRODUCT_PAGE_TAB.map((tab) => (
            <Tabs.Tab value={tab.value}>{tab.label}</Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      <Outlet />
    </>
  );
};

export default ProductLayout;
