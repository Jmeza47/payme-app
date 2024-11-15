import { Button, Card, Form, Select, Table, Tag, Checkbox } from "antd";
import { PaymentScheduleInput } from "../../common/types";
import { setShowConfirmationPaymentModal } from "../paymentsSlice";
import { InformationWidget } from "../../ui/informationWidget";
import {
  ExceptionOutlined,
  HighlightOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
import { moneyFormatter } from "../../utils/moneyFormatter";
import ConfirmPaymentModal from "../modals/confirmPaymentModal";
import { useAppDispatch } from "../../hooks/useStore";
import {
  HistoricalMoneyLoanded,
  InterestEarnedWidget,
  InterestToEarnWidget,
  TotalMoneyRecoverWidget,
  TotalMoneyToRecoverWidget,
} from "../widgets/paymentsWidgets";
import dayjs from "dayjs";
import { useState } from "react";

export default function PaymentsTable({
  loansOptions,
  customerOptions,
  selectedCustomer,
  selectedLoan,
  paidAmountTotal,
  paidInterestTotal,
  pendingPaymentsTotal,
  paymentSchedule,
  selectedPayment,
  setSelectedPayment,
  setSelectedLoan,
  setSelectedCustomer,
}: {
  loansOptions: { value: string; key: string; label: string }[];
  customerOptions: { value: string; key: string; label: string }[];
  selectedCustomer: string;
  selectedLoan: string;
  paidAmountTotal: number;
  paidInterestTotal: number;
  pendingPaymentsTotal: number;
  paymentSchedule: readonly {
    readonly _id: string;
    readonly amountPaid: number;
    readonly dueDays: number;
    readonly extraInterest: number;
    readonly interestPaid: number;
    readonly paymentDate: string;
    readonly status: string;
  }[];
  selectedPayment: string;
  setSelectedPayment: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedLoan: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedCustomer: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const dispatch = useAppDispatch();

  const [showOnlyActive, setShowOnlyActive] = useState(false);

  const handleStatusFilterChange = (e) => {
    setShowOnlyActive(e.target.checked);
  };

  const filteredPaymentSchedule = showOnlyActive
    ? paymentSchedule.filter((payment) => payment.status === "ACTIVE")
    : paymentSchedule;

  const columns = [
    {
      title: "Fecha de pago",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (paymentDate: string) =>
        dayjs(paymentDate).format("dddd DD/MM/YYYY"),
    },
    {
      title: "Capital",
      dataIndex: "amountPaid",
      key: "amountPaid",
      render: (amount: string) => <p>{`L.${amount}`}</p>,
    },
    {
      title: "Interes",
      dataIndex: "interestPaid",
      key: "interestPaid",
      render: (interest: string) => <p>{`L.${interest}`}</p>,
    },
    {
      title: "Dias Vencidos",
      dataIndex: "dueDays",
      key: "dueDays",
      render: (dueDays: number) => <p>{dueDays}</p>,
    },
    {
      title: "Interes por atraso",
      dataIndex: "extraInterest",
      key: "extraInterest",
      render: (extraInteres: number) => <p>{moneyFormatter(extraInteres)}</p>,
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status: string) =>
        status !== "ACTIVE" ? (
          <Tag color="warning">Pagado</Tag>
        ) : (
          <Tag color="success">Activo</Tag>
        ),
    },
    {
      title: "Opciones",
      key: "options",
      render: (payment: PaymentScheduleInput) =>
        payment.status === "ACTIVE" && (
          <Button
            type="primary"
            size="small"
            onClick={() => {
              dispatch(setShowConfirmationPaymentModal(true));
              setSelectedPayment(payment._id!);
            }}
          >
            Pagar
          </Button>
        ),
    },
  ];

  return (
    <div className="space-y-4">
      <Card title="Información de Cliente" type="inner">
        <Form className="flex space-x-4">
          <Form.Item label="Cliente:" className="w-full">
            <Select
              placeholder="Seleccionar Cliente"
              showSearch
              optionFilterProp="label"
              options={customerOptions}
              onChange={(value) => {
                if (value !== selectedCustomer) {
                  setSelectedCustomer(value);
                  setSelectedLoan(null); // Clear the selected loan if customer changes
                }
              }}
              allowClear
            />
          </Form.Item>
          <Form.Item label="Prestamo:" className="w-full">
            <Select
              placeholder="Seleccionar prestamo"
              options={loansOptions}
              onChange={(value) => setSelectedLoan(value)}
              disabled={!selectedCustomer}
              allowClear
              value={selectedLoan}
            />
          </Form.Item>
          <Form.Item className="w-full">
            <Checkbox
              checked={showOnlyActive}
              onChange={handleStatusFilterChange}
            >
              Activos:
            </Checkbox>
          </Form.Item>
        </Form>
      </Card>

      <div className="flex justify-between space-x-6">
        <InformationWidget
          title="Capital pagado"
          icon={<HighlightOutlined />}
          data={moneyFormatter(paidAmountTotal)}
        />
        <InformationWidget
          title="Interes Pagado"
          icon={<PercentageOutlined />}
          data={moneyFormatter(paidInterestTotal)}
        />
        <InformationWidget
          title="Cuotas Pendientes"
          icon={<ExceptionOutlined />}
          data={pendingPaymentsTotal}
        />
      </div>

      <Card title="Información de Pagos" type="inner">
        <Table
          columns={columns}
          dataSource={filteredPaymentSchedule}
          rowKey="_id"
          pagination={{ defaultPageSize: 4 }}
        />
        <ConfirmPaymentModal
          loanId={selectedLoan}
          paymentId={selectedPayment}
        />
      </Card>
      <div className="flex space-x-4">
        <TotalMoneyRecoverWidget />
        <TotalMoneyToRecoverWidget />
        <InterestEarnedWidget />
        <InterestToEarnWidget />
        <HistoricalMoneyLoanded />
      </div>
    </div>
  );
}
