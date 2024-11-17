import { Button, Form, InputNumber, Select } from "antd";
import { useGenerateWeeklyPayments } from "../hooks/useGenerateLoanPayments";
import { PaymentsTable } from "../loansTables/paymentsTable";
import useFormValidationBeforeSubmit from "../../hooks/useFormValidateBeforeSubmit";
//import { useCreateLoan } from "../hooks/useCreateLoan";
import { ILoans, PaymentScheduleInput } from "../../common/types";
import { useAppDispatch } from "../../hooks/useStore";
import { setShowLoansModal } from "../loansSlice";
import { useGetCustomers } from "../../customers/hooks/api/useGetCustomers";
import { useCreateLoan } from "../hooks/api/useCreateLoan";
import { v4 as uuidv4 } from "uuid";

export default function LoansForm() {
  const { customers } = useGetCustomers();
  const { submittable, form, values } = useFormValidationBeforeSubmit();
  //const { handleCreateLoan } = useCreateLoan();
  const { addNewLoan } = useCreateLoan();
  const dispatch = useAppDispatch();
  const { paymentSchedule, generatePaymentSchedule } =
    useGenerateWeeklyPayments();

  const options = customers.map((customer) => ({
    value: customer?._id,
    label: `${customer?.name} ${customer?.lastName}`,
  }));

  const generatedPaymentSchedule: PaymentScheduleInput[] = paymentSchedule.map(
    (payment) => ({
      _id: uuidv4(),
      paymentDate: payment.nextPaymentDate,
      amountPaid: payment.capitalWeekly,
      interestPaid: payment.interestWeekly,
      dueDays: 0,
      extraInterest: 0,
      status: "ACTIVE",
    })
  );

  const handleFormSubmit = () => {
    const loanData: ILoans = {
      ...values,
      loanStatus: "active",
      loanDate: new Date().toISOString(),
      paymentSchedule: generatedPaymentSchedule,
    };
    addNewLoan(loanData);
    dispatch(setShowLoansModal(false));
  };

  return (
    <Form
      form={form}
      initialValues={{ loanAmount: 1000, loanInterest: 15 }}
      onFinish={handleFormSubmit}
    >
      <Form.Item
        label="Cliente"
        name="customerId"
        rules={[{ required: true, message: "Por favor seleccione un cliente" }]}
      >
        <Select options={options} optionFilterProp="label" showSearch />
      </Form.Item>
      <div className="flex space-x-2 justify-around w-full">
        <Form.Item
          label="Cantidad L."
          name="loanAmount"
          rules={[
            { required: true, message: "Es necesario ingresar el monto" },
          ]}
        >
          <InputNumber<number>
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) =>
              value?.replace(/\$\s?|(,*)/g, "") as unknown as number
            }
            min={1000}
            onChange={(amount) => {
              generatePaymentSchedule(
                amount!,
                values.loanInterest,
                values.term
              );
            }}
          />
        </Form.Item>

        <Form.Item
          label="Interes"
          name="loanInterest"
          rules={[
            {
              required: true,
              message: "Por favor selecione una taza de interes",
            },
          ]}
        >
          <Select
            placeholder="Taza de interes"
            options={[
              { value: 12, label: "12%" },
              { value: 15, label: "15%" },
            ]}
            onSelect={(interest) => {
              generatePaymentSchedule(
                values.loanAmount,
                interest,
                values.loanTerm
              );
            }}
          />
        </Form.Item>

        <Form.Item
          label="Plazo"
          name="loanTerm"
          rules={[{ required: true, message: "Por favor seleccione un plazo" }]}
        >
          <InputNumber<number>
            min={1}
            step={1}
            onChange={(loanTerm) => {
              if (loanTerm !== undefined) {
                const integerValue = Math.floor(loanTerm); // Ensure it's an integer
                generatePaymentSchedule(
                  values.loanAmount,
                  values.loanInterest,
                  integerValue
                );
              }
            }}
          />
        </Form.Item>
      </div>

      <PaymentsTable dataSource={paymentSchedule ? paymentSchedule : []} />

      <div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!submittable || paymentSchedule.length <= 0}
          >
            Guardar
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
