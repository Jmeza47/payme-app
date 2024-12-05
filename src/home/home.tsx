import React, { Suspense } from "react";
import { Divider, Spin } from "antd";

// Lazy load components
const CustomersWithActiveCreditsWidget = React.lazy(() =>
  import("../customers/widgets/widgets").then((module) => ({
    default: module.CustomersWithActiveCreditsWidget,
  }))
);

const NewCustomerWidget = React.lazy(() =>
  import("../customers/widgets/widgets").then((module) => ({
    default: module.NewCustomerWidget,
  }))
);

const TotalCustomersCountWidget = React.lazy(() =>
  import("../customers/widgets/widgets").then((module) => ({
    default: module.TotalCustomersCountWidget,
  }))
);

const ActiveLoansCountWidget = React.lazy(() =>
  import("../loans/Widget/loansWidgets").then((module) => ({
    default: module.ActiveLoansCountWidget,
  }))
);

const LoansCountWidget = React.lazy(() =>
  import("../loans/Widget/loansWidgets").then((module) => ({
    default: module.LoansCountWidget,
  }))
);

const NewLoanButtonWidget = React.lazy(() =>
  import("../loans/Widget/loansWidgets").then((module) => ({
    default: module.NewLoanButtonWidget,
  }))
);

const HistoricalMoneyLoanded = React.lazy(() =>
  import("../payments/widgets/paymentsWidgets").then((module) => ({
    default: module.HistoricalMoneyLoanded,
  }))
);

const InterestEarnedWidget = React.lazy(() =>
  import("../payments/widgets/paymentsWidgets").then((module) => ({
    default: module.InterestEarnedWidget,
  }))
);

const InterestToEarnWidget = React.lazy(() =>
  import("../payments/widgets/paymentsWidgets").then((module) => ({
    default: module.InterestToEarnWidget,
  }))
);

const TodayDuePayments = React.lazy(() =>
  import("../payments/widgets/paymentsWidgets").then((module) => ({
    default: module.TodayDuePayments,
  }))
);

const TotalMoneyRecoverWidget = React.lazy(() =>
  import("../payments/widgets/paymentsWidgets").then((module) => ({
    default: module.TotalMoneyRecoverWidget,
  }))
);

const TotalMoneyToRecoverWidget = React.lazy(() =>
  import("../payments/widgets/paymentsWidgets").then((module) => ({
    default: module.TotalMoneyToRecoverWidget,
  }))
);

// Main Home Component
export default function Home() {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          className="flex justify-center items-center h-full"
        />
      }
    >
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <div className="flex flex-col w-1/3 space-y-4">
            <Divider type="horizontal">Clientes</Divider>
            <TotalCustomersCountWidget />
            <div className="flex space-x-4">
              <NewCustomerWidget width="full" />
              <CustomersWithActiveCreditsWidget />
            </div>
          </div>

          <div className="flex flex-col w-1/3 space-y-4">
            <Divider type="horizontal">Creditos</Divider>
            <LoansCountWidget />
            <div className="flex space-x-4">
              <NewLoanButtonWidget width="full" />
              <ActiveLoansCountWidget />
            </div>
          </div>

          <div className="flex flex-col w-1/3 space-y-4">
            <Divider type="horizontal">Dinero</Divider>
            <HistoricalMoneyLoanded />

            <div className="flex space-x-4">
              <TotalMoneyRecoverWidget />
              <InterestEarnedWidget />
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-col w-1/3 space-y-4">
            <Divider type="horizontal">Pagos</Divider>

            <div className="flex space-x-4">
              <TotalMoneyToRecoverWidget />
              <InterestToEarnWidget />
            </div>
          </div>

          <div className="flex flex-col w-2/3 space-y-4 h-full">
            <Divider type="horizontal">Pagos que vencen hoy</Divider>
            <TodayDuePayments />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
