import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./routes/sidebar";
import { Button, ConfigProvider, Spin } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import esES from "antd/locale/es_ES";
import { onAuthStateChanged } from "@firebase/auth";
import LoginPage from "./ui/LoginPage";
import { auth } from "./firebase";

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
  "/customers-reports": {
    title: "Reporte de clientes",
    description:
      "Vea Informacion sobre pagos, cree y descargue reportes sobre creditos.",
  },
  "/incomes-reports": {
    title: "Reporte de ingresos",
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

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <div className="h-24 py-4 px-12 bg-white flex justify-between items-center">
        <div>
          <p className="font-bold text-2xl">{path}</p>
          <p>{description}</p>
        </div>
        <Button onClick={() => auth.signOut()} type="primary">
          Cerrar Sesion
        </Button>
      </div>
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="w-dvw h-dvh">
        <Spin
          size="large"
          className="flex justify-center items-center h-full"
        />
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

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
      <div className="  flex flex-row  h-svh overflow-y-auto">
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
