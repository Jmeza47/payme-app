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
import IncomesReports from "./reports/incomesReports.tsx";

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
        path: "/customers-reports",
        element: <ReportsMain />,
      },
      {
        path: "/incomes-reports",
        element: <IncomesReports />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
