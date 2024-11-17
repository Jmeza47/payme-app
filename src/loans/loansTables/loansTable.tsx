import { Card, Input, Table, Tag } from "antd";
import { ILoans } from "../../common/types";
import { useMemo, useState } from "react";
import { moneyFormatter } from "../../utils/moneyFormatter";
import { NewLoanButtonWidget } from "../Widget/loansWidgets";
import { useGetCustomers } from "../../customers/hooks/api/useGetCustomers";
import { useGetLoans } from "../hooks/api/useGetLoans";
import dayjs from "dayjs";

export default function ShowLoansTable() {
  const { customers, loading: customerLoading } = useGetCustomers();
  const { loans, loading: loansLoading } = useGetLoans();

  const [searchQuery, setSearchQuery] = useState("");

  const loading = customerLoading || loansLoading;

  const customerNameMap = useMemo(() => {
    if (!customers || customers.length === 0) return {};
    return customers.reduce((acc, customer) => {
      acc[customer._id] = `${customer.name} ${customer.lastName}`;
      return acc;
    }, {} as Record<string, string>);
  }, [customers]);

  const filteredLoans = useMemo(() => {
    if (!loans || !customers) return [];
    return loans.filter((loan) => {
      const customerName = customerNameMap[loan.customerId] || "";
      return customerName.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [loans, searchQuery, customerNameMap]);

  const calculateTotalAmount = (loanAmount: number, loanInterest: number) => {
    return loanAmount * (loanInterest / 100) + loanAmount;
  };

  const columns = [
    {
      title: "Fecha de Prestamo",
      dataIndex: "loanDate",
      key: "loanDate",
      render: (loanDate) => <p>{dayjs(loanDate).format("dddd DD/MM/YYYY")}</p>,
    },
    {
      title: "Cliente",
      dataIndex: "customerId",
      key: "customerId",
      render: (customerId: string) => customerNameMap[customerId] || "N/A",
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
        <p>{loanTerm < 2 ? `${loanTerm} Semana` : `${loanTerm} Semanas`}</p>
      ),
    },
    {
      title: "Total",
      key: "total",
      render: (row: ILoans) => {
        const total = calculateTotalAmount(row.loanAmount, row.loanInterest);
        return <p>{moneyFormatter(total)}</p>;
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
  ];

  return (
    <div className="space-y-4 w-full">
      <div className="flex justify-between space-x-4">
        <NewLoanButtonWidget width="w-fit" />
        <Card
          title="Buscar prestamo por cliente"
          type="inner"
          className="w-full"
        >
          <Input.Search
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar cliente"
          />
        </Card>
      </div>
      <Card title="Informacion de prestamos" type="inner">
        <Table
          loading={loading}
          columns={columns}
          dataSource={filteredLoans}
          rowKey="_id"
          pagination={{ defaultPageSize: 5 }}
        />
      </Card>
    </div>
  );
}
