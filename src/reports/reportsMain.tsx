import {
  Card,
  DatePicker,
  Select,
  Table,
  Checkbox,
  Tag,
  Button,
  Spin,
} from "antd";
import type { CheckboxProps } from "antd";
import { useMemo, useState } from "react";
import { moneyFormatter } from "../utils/moneyFormatter";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import "dayjs/locale/es";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { DocumentTemplate } from "./pdfPrint/documentTemplate";
import { ILoans } from "../common/types";
import { DownloadOutlined } from "@ant-design/icons";
import { useGetCustomers } from "../customers/hooks/api/useGetCustomers";
import { useGetLoans } from "../loans/hooks/api/useGetLoans";

dayjs.extend(isBetween);
dayjs.locale("es");

const { RangePicker } = DatePicker;

export default function ReportsMain() {
  const { customers, loading } = useGetCustomers();
  const { loans } = useGetLoans();

  const [dateRange, setDateRange] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  const customerNameMap = useMemo(() => {
    const map = {};
    customers.forEach((customer) => {
      map[customer._id] = `${customer.name} ${customer.lastName}`;
    });
    return map;
  }, [customers]);

  const customerOptions = useMemo(
    () =>
      customers
        .map((customer) => ({
          value: customer?._id,
          label: `${customer?.name} ${customer?.lastName}`,
          key: customer?._id,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    [customers]
  );

  const filteredLoans = loans.filter((loan) => {
    const loanDate = dayjs(loan.loanDate);
    const [startDate, endDate] = dateRange;

    const dateFilter =
      !startDate ||
      !endDate ||
      loanDate.isBetween(startDate, endDate, null, "[]");

    const customerFilter =
      !selectedCustomer || loan.customerId === selectedCustomer;

    const activeLoanFilter = !isActive || loan.loanStatus === "active";
    return dateFilter && customerFilter && activeLoanFilter;
  });

  const onChange: CheckboxProps["onChange"] = (e) => {
    setIsActive(e.target.checked);
  };

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
      render: (customer) => customerNameMap[customer],
    },
    {
      title: "Capital",
      dataIndex: "loanAmount",
      key: "loanAmount",
      render: (amount) => moneyFormatter(amount),
    },
    {
      title: "Taza de Interes",
      dataIndex: "loanInterest",
      key: "loanInterest",
      render: (interest) => `${interest}%`,
    },
    {
      title: "Plazo",
      dataIndex: "loanTerm",
      key: "loanTerm",
      render: (term) => (term > 1 ? `${term} Semanas` : `${term} Semana`),
    },
    {
      title: "Estado",
      dataIndex: "loanStatus",
      key: "loanStatus",
      render: (status) =>
        status === "active" ? (
          <Tag color="green">Activo</Tag>
        ) : (
          <Tag color="warning">Pagado</Tag>
        ),
    },
    {
      title: "Imprimir",
      key: "print",
      render: (row: ILoans) => (
        <PDFDownloadLink
          document={
            <DocumentTemplate
              customer={customers.find(
                (customer) => customer._id === row.customerId
              )}
              loanDate={row.loanDate}
              loanAmount={row.loanAmount}
              loanInterest={row.loanInterest}
              loanTerm={row.loanTerm}
              loanStatus={row.loanStatus}
              paymentSchedule={row.paymentSchedule}
            />
          }
          fileName={`${
            customers.find((customer) => customer._id === row.customerId).name
          } ${row._id}`}
        >
          <Button type="primary">
            <DownloadOutlined />
            PDF
          </Button>
        </PDFDownloadLink>
      ),
    },
  ];

  const paymentScheduleColumns = [
    {
      title: "Fecha de Pago",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (nextPaymentDate: Date) => (
        <p>{dayjs(nextPaymentDate).format("dddd DD/MM/YYYY")}</p>
      ),
    },
    {
      title: "Monto Pagado",
      dataIndex: "amountPaid",
      key: "amountPaid",
      render: (amount) => moneyFormatter(amount),
    },
    {
      title: "Interes Pagado",
      dataIndex: "interestPaid",
      key: "interestPaid",
      render: (interest) => moneyFormatter(interest),
    },
    {
      title: "Dias Atraso",
      dataIndex: "dueDays",
      key: "dueDays",
    },
    {
      title: "Interes por Atraso",
      dataIndex: "extraInterest",
      key: "extraInterest",
      render: (extraInterest) => moneyFormatter(extraInterest),
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === "ACTIVE" ? (
          <Tag color="green">Activo</Tag>
        ) : (
          <Tag color="warning">Pagado</Tag>
        ),
    },
  ];

  if (loading) {
    return (
      <Spin size="large" className="flex justify-center items-center h-full" />
    );
  }

  return (
    <div className="space-y-4">
      <Card title="Filtrar creditos" type="inner">
        <div className="flex justify-center space-x-4">
          <RangePicker
            placeholder={["Fecha Inicial", "Fecha Final"]}
            format="DD/MM/YYYY"
            onCalendarChange={(dates) => {
              setDateRange(dates);
            }}
          />
          <Select
            options={customerOptions}
            showSearch
            className="w-1/3"
            optionFilterProp="label"
            onChange={(value) => {
              if (value !== selectedCustomer) {
                setSelectedCustomer(value);
              }
            }}
            allowClear
          />
          <Checkbox className=" items-center" onChange={onChange}>
            Activos
          </Checkbox>
        </div>
      </Card>
      <Card>
        <Table
          columns={columns}
          dataSource={filteredLoans ? filteredLoans : []}
          rowKey={"_id"}
          loading={loading}
          pagination={{ defaultPageSize: 5 }}
          expandable={{
            expandedRowRender: (loan: ILoans) => (
              <Table
                loading={loading}
                columns={paymentScheduleColumns}
                dataSource={loans ? loan.paymentSchedule : []}
                rowKey={(record) => record._id}
                pagination={false}
              />
            ),
          }}
        />
      </Card>
    </div>
  );
}
