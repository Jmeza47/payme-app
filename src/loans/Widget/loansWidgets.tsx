import { Button, Card } from "antd";
import { moneyFormatter } from "../../utils/moneyFormatter";
import { AddOrEditLoan } from "../newLoan/addOrEditLoan";
import { setShowLoansModal } from "../loansSlice";
import { useAppDispatch } from "../../hooks/useStore";
import {
  BankOutlined,
  EuroCircleOutlined,
  PercentageOutlined,
  PlusOutlined,
  UpSquareOutlined,
} from "@ant-design/icons";
import { useMemo } from "react";
import { InformationWidget } from "../../ui/informationWidget";
import { useGetLoans } from "../hooks/api/useGetLoans";

export function LoansCountWidget() {
  const { loans } = useGetLoans();
  return (
    <InformationWidget
      title="Creditos"
      data={loans.length}
      icon={<BankOutlined style={{ color: "green" }} />}
    />
  );
}

export function ActiveLoansCountWidget() {
  const { loans } = useGetLoans();
  return (
    <InformationWidget
      title="Activos"
      data={loans.reduce(
        (acc, loan) => acc + (loan?.loanStatus === "active" ? 1 : 0),
        0
      )}
      icon={<UpSquareOutlined style={{ color: "green" }} />}
    />
  );
}

export function TotalMoneyBorrowedWidget() {
  const { loans } = useGetLoans();

  return (
    <InformationWidget
      title="Creditos activos"
      data={moneyFormatter(
        loans
          .filter((loan) => loan.loanStatus !== "PAID")
          .reduce((acc, loan) => acc + loan!.loanAmount, 0)
      )}
      icon={<EuroCircleOutlined style={{ color: "yellowgreen" }} />}
    />
  );
}

export function TotalInterestAccruedWidget() {
  const { loans } = useGetLoans();

  const totalInterest = useMemo(() => {
    return moneyFormatter(
      loans.reduce(
        (acc, loan) => acc + (loan!.loanAmount * loan!.loanInterest) / 100,
        0
      )
    );
  }, [loans]);

  return (
    <InformationWidget
      title="Suma de intereses totales"
      data={totalInterest}
      icon={<PercentageOutlined style={{ color: "yellowgreen" }} />}
    />
  );
}

export function NewLoanButtonWidget({ width }: { width?: string }) {
  const dispatch = useAppDispatch();
  return (
    <>
      <AddOrEditLoan />
      <Card
        title="Crear credito"
        type="inner"
        className={!width ? "w-full" : width}
      >
        <Button
          onClick={() => {
            dispatch(setShowLoansModal(true));
          }}
          type="primary"
          className="w-full"
        >
          <PlusOutlined />
          Nuevo
        </Button>
      </Card>
    </>
  );
}
