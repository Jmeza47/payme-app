import { Suspense, lazy } from "react";

const ShowLoansTable = lazy(() => import("./loansTables/loansTable"));

import {
  LoansCountWidget,
  ActiveLoansCountWidget,
  TotalMoneyBorrowedWidget,
  TotalInterestAccruedWidget,
} from "./Widget/loansWidgets";
import { Spin } from "antd";

export default function LoansMain() {
  return (
    <div className=" space-y-4">
      <div className="flex space-x-4  justify-between">
        <LoansCountWidget />
        <ActiveLoansCountWidget />
        <TotalMoneyBorrowedWidget />
        <TotalInterestAccruedWidget />
      </div>
      <Suspense
        fallback={
          <Spin
            size="large"
            className="flex justify-center items-center h-full"
          />
        }
      >
        <ShowLoansTable />
      </Suspense>
    </div>
  );
}
