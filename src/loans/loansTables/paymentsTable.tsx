import { Table } from "antd";
import { PaymentSchedule } from "../hooks/useGenerateLoanPayments";
import dayjs from "dayjs";
import { moneyFormatter } from "../../utils/moneyFormatter";

export function PaymentsTable({
  dataSource,
}: {
  dataSource: PaymentSchedule[];
}) {
  const columns = [
    {
      title: "Fecha de Pago",
      dataIndex: "nextPaymentDate",
      key: "nextPaymentDate",
      render: (nextPaymentDate: Date) => (
        <p>{dayjs(nextPaymentDate).format("dddd DD/MM/YYYY")}</p>
      ),
    },
    {
      title: "Capital",
      dataIndex: "capitalWeekly",
      key: "capitalWeekly",
      render: (capitalWeekly: number) => moneyFormatter(capitalWeekly),
    },
    {
      title: "Interes",
      dataIndex: "interestWeekly",
      key: "interestWeekly",
      render: (interestWeekly: number) => moneyFormatter(interestWeekly),
    },
    {
      title: "Total",
      dataIndex: "totalPayment",
      key: "totalPayment",
      render: (totalPayment: number) => moneyFormatter(totalPayment),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      size="small"
      pagination={{ defaultPageSize: 4 }}
      rowKey="nextPaymentDate"
      className="h-[280px]"
    ></Table>
  );
}
