import { useMemo } from "react";
import { InformationWidget } from "../../ui/informationWidget";
import { moneyFormatter } from "../../utils/moneyFormatter";
import {
  AlertOutlined,
  CreditCardOutlined,
  DollarOutlined,
  EuroCircleOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { Table } from "antd";

import dayjs from "dayjs";
import { useGetCustomers } from "../../customers/hooks/api/useGetCustomers";
import { useGetLoans } from "../../loans/hooks/api/useGetLoans";

export function TotalMoneyRecoverWidget() {
  const { loans } = useGetLoans();

  const totalPaidAmount = () => {
    return loans.reduce((total, loan) => {
      const loanPaidAmount = loan.paymentSchedule
        .filter((payment) => payment.status === "PAID")
        .reduce((sum, payment) => sum + payment.amountPaid, 0);

      return total + loanPaidAmount;
    }, 0);
  };

  return (
    <InformationWidget
      title="Capital Recuperado"
      data={moneyFormatter(totalPaidAmount())}
      icon={<FireOutlined style={{ color: "red" }} />}
    />
  );
}

export function TotalMoneyToRecoverWidget() {
  const { loans } = useGetLoans();

  const totalPaidAmount = useMemo(() => {
    return loans.reduce((total, loan) => {
      const loanPaidAmount = loan.paymentSchedule
        .filter((payment) => payment.status === "ACTIVE")
        .reduce((sum, payment) => sum + payment.amountPaid, 0);

      return total + loanPaidAmount;
    }, 0);
  }, [loans]);
  return (
    <InformationWidget
      title="Capital por recuperar"
      data={moneyFormatter(totalPaidAmount)}
      icon={<AlertOutlined style={{ color: "red" }} />}
    />
  );
}

export function InterestEarnedWidget() {
  const { loans } = useGetLoans();

  const totalPaidAmount = useMemo(() => {
    return loans.reduce((total, loan) => {
      const loanPaidAmount = loan.paymentSchedule
        .filter((payment) => payment.status === "PAID")
        .reduce((sum, payment) => sum + payment.interestPaid, 0);

      return total + loanPaidAmount;
    }, 0);
  }, [loans]);
  return (
    <InformationWidget
      title="Interes ganado"
      data={moneyFormatter(totalPaidAmount)}
      icon={<DollarOutlined style={{ color: "green" }} />}
    />
  );
}

export function InterestToEarnWidget() {
  const { loans } = useGetLoans();

  const totalPaidAmount = useMemo(() => {
    return loans.reduce((total, loan) => {
      const loanPaidAmount = loan.paymentSchedule
        .filter(
          (payment) => payment.status !== "PAID" && loan.loanStatus !== "PAID"
        )
        .reduce((sum, payment) => sum + payment.interestPaid, 0);

      return total + loanPaidAmount;
    }, 0);
  }, [loans]);
  return (
    <InformationWidget
      title="Interes por cobrar"
      data={moneyFormatter(totalPaidAmount)}
      icon={<EuroCircleOutlined />}
    />
  );
}

export function HistoricalMoneyLoanded() {
  const { loans } = useGetLoans();

  const totalPaidAmount = useMemo(() => {
    return loans.reduce((total, loan) => {
      const loanPaidAmount = loan.paymentSchedule
        .filter((payment) => payment.status === "PAID")
        .reduce((sum, payment) => sum + payment.amountPaid, 0);
      return total + loanPaidAmount;
    }, 0);
  }, [loans.map((loan) => loan._id)]);

  return (
    <InformationWidget
      title="Total Creditos pagados"
      data={moneyFormatter(totalPaidAmount)}
      icon={<CreditCardOutlined style={{ color: "green" }} />}
    />
  );
}

export const TodayDuePayments = () => {
  const { loans } = useGetLoans();
  const { customers } = useGetCustomers();

  // Map customer IDs to their names for easy lookup
  const customerNameMap = useMemo(() => {
    const map = {};
    customers.forEach((customer) => {
      map[customer._id] = `${customer.name} ${customer.lastName}`;
    });
    return map;
  }, [customers]);

  // Filter payments due today with loan and payment statuses not "PAID"
  const todayDuePayments = useMemo(() => {
    const today = dayjs();
    return loans
      .filter((loan) => loan.loanStatus !== "PAID")
      .flatMap((loan) =>
        loan.paymentSchedule
          .filter(
            (payment) =>
              payment.status !== "PAID" &&
              dayjs(payment.paymentDate).isSame(today, "day")
          )
          .map((payment) => ({
            dueDate: payment.paymentDate,
            customer: customerNameMap[loan.customerId],
            amountPaid: moneyFormatter(
              payment.amountPaid + payment.interestPaid
            ),
          }))
      );
  }, [loans, customerNameMap]);

  const columns = [
    {
      title: "Fecha de Pago",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (date) => dayjs(date).format("dddd DD/MM/YYYY"),
    },
    {
      title: "Cliente",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Monto",
      dataIndex: "amountPaid",
      key: "amountPaid",
    },
  ];

  return (
    <Table
      locale={{
        emptyText: "No hay pagos pendientes, para hoy",
      }}
      pagination={{ pageSize: 5, simple: true }}
      columns={columns}
      dataSource={todayDuePayments}
      rowKey="dueDate"
      className="w-full bg-white rounded-md"
    />
  );
};
