import {
  AreaChartOutlined,
  BankOutlined,
  HomeOutlined,
  SnippetsOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/",
    label: "Inicio",
    icon: <HomeOutlined />,
  },
  {
    key: "customers",
    label: "Clintes",
    icon: <TeamOutlined />,
  },
  {
    key: "loans",
    label: "Creditos",
    icon: <BankOutlined />,
  },
  {
    key: "payments",
    label: "Pagos",
    icon: <SnippetsOutlined />,
  },
  {
    key: "reports",
    label: "Reportes",
    icon: <AreaChartOutlined />,
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    startTransition(() => {
      navigate(e.key !== "/" && `./${e.key}`);
    });
  };
  return (
    <Menu
      onClick={onClick}
      className="w-fit flex flex-col p-2 justify-center"
      defaultSelectedKeys={["1"]}
      selectable
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
}
