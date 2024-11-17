import Payments from "./paymentsTable/payments";
import {
  InterestEarnedWidget,
  InterestToEarnWidget,
  TotalMoneyRecoverWidget,
  TotalMoneyToRecoverWidget,
} from "./widgets/paymentsWidgets";

export default function PaymentsMain() {
  return (
    <div className="space-y-4">
      <Payments />
      <div className="flex space-x-4">
        <TotalMoneyRecoverWidget />
        <InterestEarnedWidget />
        <TotalMoneyToRecoverWidget />
        <InterestToEarnWidget />
      </div>
    </div>
  );
}
