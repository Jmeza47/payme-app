import {
  CustomersWithActiveCreditsWidget,
  NewCustomerWidget,
  TotalCustomersCountWidget,
} from "../customers/widgets/widgets";
import {
  ActiveLoansCountWidget,
  LoansCountWidget,
  NewLoanButtonWidget,
} from "../loans/Widget/loansWidgets";
import { Divider } from "antd";
import {
  HistoricalMoneyLoanded,
  InterestEarnedWidget,
  InterestToEarnWidget,
  TodayDuePayments,
  TotalMoneyRecoverWidget,
  TotalMoneyToRecoverWidget,
} from "../payments/widgets/paymentsWidgets";

export default function Home() {
  return (
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

        <div className="flex flex-col w-2/3 space-y-4 h-full ">
          <Divider type="horizontal">Pagos que vencen hoy</Divider>
          <TodayDuePayments />
        </div>
      </div>
    </div>
  );
}
