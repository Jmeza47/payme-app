import { useMemo, useState } from "react";
import { Card, DatePicker, Table, Button, Spin, TableColumnsType } from "antd";
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

interface DataType {
  loanDate: string;
  customerId: string;
  loanAmount: number;
  loanInterest: number;
  paidAmount: number;
  pendingAmount: number;
  interestPaid: number;
  interestPending: number;
}

const { RangePicker } = DatePicker;

export default function IncomesReports() {
  const { customers, loading } = useGetCustomers();
  const { loans } = useGetLoans();

  const [dateRange, setDateRange] = useState([]);

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
    return <IncomeTemplate data={processedData} customers={customers} />;
  }, [processedData, customers]);

  const columns: TableColumnsType<DataType> = useMemo(
    () => [
      {
        title: "Fecha de Prestamo",
        dataIndex: "loanDate",
        key: "loanDate",
        render: (date) => dayjs(date).format("dddd DD/MM/YYYY"),
        sorter: (a, b) => b.loanDate.localeCompare(a.loanDate),
        defaultSortOrder: "descend",
        showSorterTooltip: false,
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
    ],
    [customerNameMap]
  );

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  if (loading) {
    return (
      <Spin size="large" className="flex justify-center items-center h-full" />
    );
  }

  const startDate = dateRange[0]?.format("DD-MM-YYYY");
  const endDate = dateRange[1]?.format("DD-MM-YYYY");

  const nullDates =
    (dateRange[0] === undefined || dateRange[0] === null) &&
    (dateRange[1] === undefined || dateRange[1] === null);

  return (
    <div className="space-y-4">
      <Card title="Filtrar créditos" type="inner">
        <div className="flex justify-center space-x-4">
          <RangePicker
            placeholder={["Fecha Inicial", "Fecha Final"]}
            format="DD/MM/YYYY"
            onCalendarChange={handleDateChange} // Using memoized callback
          />
        </div>
      </Card>
      <Card>
        <Table
          columns={columns}
          dataSource={processedData || []}
          rowKey="_id"
          pagination={{ defaultPageSize: 5 }} // Ensuring pagination is used
        />
      </Card>
      {(nullDates || endDate !== undefined) && (
        <PDFDownloadLink
          document={pdfDocument}
          fileName={`reporte_ingresos_${startDate}_a_${endDate}`}
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
