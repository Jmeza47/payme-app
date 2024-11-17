import { useMemo, useState } from "react";
import { Card, DatePicker, Table, Button, Spin } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { DownloadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import "dayjs/locale/es";
import { IncomeTemplate } from "./pdfPrint/incomeTemplate";
import { useGetCustomers } from "../customers/hooks/api/useGetCustomers";
import { useGetLoans } from "../loans/hooks/api/useGetLoans";
import { moneyFormatter } from "../utils/moneyFormatter";

dayjs.extend(isBetween);
dayjs.locale("es");

const { RangePicker } = DatePicker;

export default function IncomesReports() {
  const { customers, loading } = useGetCustomers();
  const { loans } = useGetLoans();

  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null]
  >([null, null]);

  const customerNameMap = useMemo(() => {
    const map: Record<string, string> = {};
    customers.forEach((customer) => {
      map[customer._id] = `${customer.name} ${customer.lastName}`;
    });
    return map;
  }, [customers]);

  const filteredLoans = useMemo(() => {
    const [startDate, endDate] = dateRange;
    return loans.filter((loan) => {
      const loanDate = dayjs(loan.loanDate);
      return (
        (!startDate ||
          !endDate ||
          loanDate.isBetween(startDate, endDate, null, "[]")) &&
        loan.customerId
      );
    });
  }, [loans, dateRange]);

  const processedData = useMemo(() => {
    return filteredLoans.map((loan) => ({
      ...loan,
      paidAmount: loan.paymentSchedule
        .filter((payment) => payment.status === "PAID")
        .reduce((acc, payment) => acc + payment.amountPaid, 0),
      pendingAmount: loan.paymentSchedule
        .filter((payment) => payment.status === "ACTIVE")
        .reduce((acc, payment) => acc + payment.amountPaid, 0),
      interestPaid: loan.paymentSchedule
        .filter((payment) => payment.status === "PAID")
        .reduce((acc, payment) => acc + payment.interestPaid, 0),
      interestPending: loan.paymentSchedule
        .filter((payment) => payment.status === "ACTIVE")
        .reduce((acc, payment) => acc + payment.interestPaid, 0),
    }));
  }, [filteredLoans]);

  const pdfDocument = useMemo(() => {
    if (!processedData.length) return null; // Prevent rendering an invalid document
    return <IncomeTemplate data={processedData} />;
  }, [processedData]);

  const columns = [
    {
      title: "Fecha de Prestamo",
      dataIndex: "loanDate",
      key: "loanDate",
      render: (date) => dayjs(date).format("dddd DD/MM/YYYY"),
    },
    {
      title: "Cliente",
      dataIndex: "customerId",
      key: "customerId",
      render: (customerId) => customerNameMap[customerId],
    },
    {
      title: "Capital",
      dataIndex: "loanAmount",
      key: "loanAmount",
      render: (amount) => moneyFormatter(amount),
    },
    {
      title: "Interes",
      dataIndex: "loanInterest",
      key: "loanInterest",
      render: (interest) => <p>{`${interest}%`}</p>,
    },
    {
      title: "Cap. Pagado",
      dataIndex: "paidAmount",
      key: "paidAmount",
      render: (amount) => moneyFormatter(amount),
    },
    {
      title: "Cap. Pendiente",
      dataIndex: "pendingAmount",
      key: "pendingAmount",
      render: (amount) => moneyFormatter(amount),
    },
    {
      title: "Int. Pagado",
      dataIndex: "interestPaid",
      key: "interestPaid",
      render: (amount) => moneyFormatter(amount),
    },
    {
      title: "Int. Pendiente",
      dataIndex: "interestPending",
      key: "interestPending",
      render: (amount) => moneyFormatter(amount),
    },
  ];

  if (loading) {
    return (
      <Spin size="large" className="flex justify-center items-center h-full" />
    );
  }

  return (
    <div className="space-y-4">
      <Card title="Filtrar créditos" type="inner">
        <div className="flex justify-center space-x-4">
          <RangePicker
            placeholder={["Fecha Inicial", "Fecha Final"]}
            format="DD/MM/YYYY"
            onCalendarChange={(dates) =>
              setDateRange(dates as [dayjs.Dayjs, dayjs.Dayjs])
            }
          />
        </div>
      </Card>
      <Card>
        <Table
          columns={columns}
          dataSource={processedData}
          rowKey="_id"
          pagination={{ defaultPageSize: 5 }}
        />
      </Card>
      {processedData.length > 0 && (
        <PDFDownloadLink
          document={pdfDocument}
          fileName={`reporte_ingresos_${
            dateRange[0]?.format("DD-MM-YYYY") || "inicio"
          }_a_${dateRange[1]?.format("DD-MM-YYYY") || "fin"}`}
        >
          <Button type="primary">
            <DownloadOutlined />
            PDF
          </Button>
        </PDFDownloadLink>
      )}
    </div>
  );
}
