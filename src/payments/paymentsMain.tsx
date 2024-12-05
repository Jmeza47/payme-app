import { Spin } from "antd";
import { lazy, Suspense } from "react";
const Payments = lazy(() => import("./paymentsTable/payments"));

const InterestEarnedWidget = lazy(() =>
  import("./widgets/paymentsWidgets").then((module) => ({
    default: module.InterestEarnedWidget,
  }))
);

const InterestToEarnWidget = lazy(() =>
  import("./widgets/paymentsWidgets").then((module) => ({
    default: module.InterestToEarnWidget,
  }))
);

const TotalMoneyRecoverWidget = lazy(() =>
  import("./widgets/paymentsWidgets").then((module) => ({
    default: module.TotalMoneyRecoverWidget,
  }))
);

const TotalMoneyToRecoverWidget = lazy(() =>
  import("./widgets/paymentsWidgets").then((module) => ({
    default: module.TotalMoneyToRecoverWidget,
  }))
);

export default function PaymentsMain() {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          className="flex justify-center items-center h-full"
        />
      }
    >
      <div className="space-y-4">
        <Payments />
        <div className="flex space-x-4">
          <TotalMoneyRecoverWidget />
          <InterestEarnedWidget />
          <TotalMoneyToRecoverWidget />
          <InterestToEarnWidget />
        </div>
      </div>
    </Suspense>
  );
}
