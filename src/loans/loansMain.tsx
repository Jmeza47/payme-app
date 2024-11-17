import ShowLoansTable from "./loansTables/loansTable";
import {
  LoansCountWidget,
  ActiveLoansCountWidget,
  TotalMoneyBorrowedWidget,
  TotalInterestAccruedWidget,
} from "./Widget/loansWidgets";

export default function LoansMain() {
  return (
    <div className=" space-y-4">
      <div className="flex space-x-4  justify-between">
        <LoansCountWidget />
        <ActiveLoansCountWidget />
        <TotalMoneyBorrowedWidget />
        <TotalInterestAccruedWidget />
      </div>
      <ShowLoansTable />
    </div>
  );
}
