import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.ts";
import App from "./App.tsx";
import ErrorElement from "./ui/errorElement.tsx";

// Lazy load route components
const Home = lazy(() => import("./home/home.tsx"));
const CustomerMainScreen = lazy(() => import("./customers/customersMain.tsx"));
const LoansMain = lazy(() => import("./loans/loansMain.tsx"));
const PaymentsMain = lazy(() => import("./payments/paymentsMain.tsx"));
const ReportsMain = lazy(() => import("./reports/reportsMain.tsx"));
const IncomesReports = lazy(() => import("./reports/incomesReports.tsx"));

const LazyLoadFallback = <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={LazyLoadFallback}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/customers",
        element: (
          <Suspense fallback={LazyLoadFallback}>
            <CustomerMainScreen />
          </Suspense>
        ),
      },
      {
        path: "/loans",
        element: (
          <Suspense fallback={LazyLoadFallback}>
            <LoansMain />
          </Suspense>
        ),
      },
      {
        path: "/payments",
        element: (
          <Suspense fallback={LazyLoadFallback}>
            <PaymentsMain />
          </Suspense>
        ),
      },
      {
        path: "/customers-reports",
        element: (
          <Suspense fallback={LazyLoadFallback}>
            <ReportsMain />
          </Suspense>
        ),
      },
      {
        path: "/incomes-reports",
        element: (
          <Suspense fallback={LazyLoadFallback}>
            <IncomesReports />
          </Suspense>
        ),
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
