import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
//import enviroment from "./RelayEnvironmentAWS.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.ts";
import CustomerMainScreen from "./customers/customersMain.tsx";
import LoansMain from "./loans/loansMain.tsx";
import PaymentsMain from "./payments/paymentsMain.tsx";
import App from "./App.tsx";
import Home from "./home/home.tsx";
import ReportsMain from "./reports/reportsMain.tsx";
import ErrorElement from "./ui/errorElement.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/customers",
        element: <CustomerMainScreen />,
      },
      {
        path: "/loans",
        element: <LoansMain />,
      },
      {
        path: "/payments",
        element: <PaymentsMain />,
      },
      {
        path: "/reports",
        element: <ReportsMain />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RelayEnvironmentProvider>
  </Provider>
);
