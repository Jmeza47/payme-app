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
    key: "reports1",
    label: "Reportes",
    icon: <AreaChartOutlined />,
    children: [
      {
        key: "customers-reports",
        label: "Clientes",
        icon: <TeamOutlined />,
      },
      {
        key: "incomes-reports",
        label: "Ingresos",
        icon: <TeamOutlined />,
      },
    ],
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
      className="w-1/6 flex flex-col p-2 justify-center text-base "
      defaultSelectedKeys={["1"]}
      selectable
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
}
