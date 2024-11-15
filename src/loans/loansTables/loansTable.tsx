import { Card, Input, Table, Tag } from "antd";
import { ILoans } from "../../common/types";
import { useGetCustomers } from "../../customers/hooks/useGetCustomers";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { graphql, useFragment } from "react-relay";
import { loansTable$key } from "./__generated__/loansTable.graphql";
import { moneyFormatter } from "../../utils/moneyFormatter";
import { NewLoanButtonWidget } from "../Widget/loansWidgets";

type Props = {
  loansFragmentKey: loansTable$key | null;
};

const loansFragment = graphql`
  fragment loansTable on LoanEdge @relay(plural: true) {
    node {
      _id
      customerId
      loanAmount
      loanInterest
      loanTerm
      loanStatus
      loanDate
      paymentSchedule {
        _id
        paymentDate
        amountPaid
        interestPaid
        dueDays
        extraInterest
        status
      }
    }
  }
`;

export default function ShowLoansTable({ loansFragmentKey }: Props) {
  const loans = useFragment(loansFragment, loansFragmentKey);
  const customers = useGetCustomers();

  const [searchQuery, setSearchQuery] = useState("");

  const { Search } = Input;

  const customerNameMap = customers.reduce((acc, customer) => {
    acc[customer!._id] = `${customer?.name} ${customer?.lastName}`;
    return acc;
  }, {} as Record<string, string>);
  const filteredLoans = useMemo(
    () =>
      loans
        ?.map((edge) => edge.node)
        .filter(
          (loan) =>
            loan &&
            customerNameMap[loan.customerId] &&
            customerNameMap[loan.customerId]
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        ) ?? [],
    [loans, searchQuery, customerNameMap]
  );

  const calculateTotalAmount = (loanAmount: number, loanInterest: number) => {
    return loanAmount * (loanInterest / 100) + loanAmount;
  };

  const columns = useMemo(
    () => [
      {
        title: "Fecha de Prestamo",
        dataIndex: "loanDate",
        key: "loanDate",
        render: (loanDate) => (
          <p>{dayjs(loanDate).format("dddd DD/MM/YYYY")}</p>
        ),
      },
      {
        title: "Cliente",
        dataIndex: "customerId",
        key: "customerId",
        render: (customerId: string) => customerNameMap[customerId], // Assuming customerId is a valid customer id
      },
      {
        title: "Capital",
        dataIndex: "loanAmount",
        key: "loanAmount",
        render: (loanAmount: number) => <p>{moneyFormatter(loanAmount)}</p>,
      },
      {
        title: "Interes",
        dataIndex: "loanInterest",
        key: "loanInterest",
        render: (loanInterest: number) => <p>{loanInterest}%</p>,
      },
      {
        title: "Plazo",
        dataIndex: "loanTerm",
        key: "loanTerm",
        render: (loanTerm: number) => (
          <p>{loanTerm < 2 ? `${loanTerm} Mes` : `${loanTerm} Meses`}</p>
        ),
      },
      {
        title: "Total",
        key: "total",
        render: (row: ILoans) => {
          const total = calculateTotalAmount(row.loanAmount, row.loanInterest);
          return <p>{`${moneyFormatter(total)}`}</p>;
        },
      },
      {
        title: "Estado del prestamo",
        dataIndex: "loanStatus",
        key: "loanStatus",
        render: (loanStatus: string) => (
          <Tag color={loanStatus === "active" ? "green" : "red"}>
            {loanStatus === "active" ? "Activo" : "Pagado"}
          </Tag>
        ),
      },
    ],
    []
  );

  return (
    <div className="space-y-4 w-full">
      <div className="flex justify-between space-x-4">
        <NewLoanButtonWidget width="w-fit" />
        <Card
          title="Buscar prestamo por cliente"
          type="inner"
          className="w-full"
        >
          <Search onChange={(e) => setSearchQuery(e.target.value)} />
        </Card>
      </div>
      <Card title="Informacion de prestamos" type="inner">
        <Table
          columns={columns}
          dataSource={filteredLoans}
          rowKey="_id"
          pagination={{ defaultPageSize: 5 }}
        />
      </Card>
    </div>
  );
}
