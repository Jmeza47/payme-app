import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./routes/sidebar";
import { ConfigProvider } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import esES from "antd/locale/es_ES";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

type PathInfo = {
  title: string;
  description: string;
};

const pathMap: { [key: string]: PathInfo } = {
  "/": {
    title: "Inicio",
    description:
      "Informacion sobre Creditos, Clientes, Pagos y accesos directos.",
  },
  "/customers": {
    title: "Clientes",
    description:
      "Informacion sobre contactos, cree, edite y elimine contactos.",
  },
  "/loans": {
    title: "Creditos",
    description:
      "Informacion sobre creditos, cree y revise informacion de intereses, plazos y mas sobre los creditos.",
  },
  "/payments": {
    title: "Pagos",
    description:
      "Informacion sobre pagos, fechas de pago, plazos, intereses y realize pagos.",
  },
  "/reports": {
    title: "Reportes",
    description:
      "Vea Informacion sobre pagos, cree y descargue reportes sobre creditos.",
  },
};

export default function App() {
  const { pathname } = useLocation();
  const [pathInfo, setPathInfo] = useState<PathInfo>({
    title: "Inicio",
    description:
      "Informacion sobre Creditos, Clientes, Pagos y accesos directos.",
  });

  useEffect(() => {
    setPathInfo(pathMap[pathname] ?? { title: "Inicio", description: "" });
  }, [pathname]);

  const Header = ({
    path,
    description,
  }: {
    path: string;
    description: string;
  }) => {
    return (
      <div className="h-24 p-4 bg-white">
        <p className="font-bold text-2xl">{path}</p>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <ConfigProvider
      locale={esES}
      theme={{
        components: {
          Table: {
            cellPaddingBlock: 6,
          },
          Statistic: {
            titleFontSize: 18,
          },
        },
      }}
    >
      <div className="  flex flex-row h-svh overflow-y-auto">
        <Sidebar />

        <div className=" overflow-y-auto w-full bg-gray-100">
          <Header path={pathInfo.title!} description={pathInfo.description!} />
          <div className="p-4 ">
            <Outlet />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
