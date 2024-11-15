import { useMemo } from "react";
import { InformationWidget } from "../../ui/informationWidget";
import { useGetLoans } from "../../loans/hooks/useGetLoans";
import { useGetCustomers } from "../hooks/useGetCustomers";
import { Button, Card } from "antd";
import { setShowCreateCustomerModal } from "../customerSlice";
import {
  PlusOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import AddOrEditCustomer from "../newCustomers/addOrEditCustomer";

export function CustomersWithActiveCreditsWidget({
  width,
}: {
  width?: string;
}) {
  const loans = useGetLoans();
  const customers = useGetCustomers();

  const activeCustomerCount = useMemo(() => {
    if (!loans) return 0;

    const customersWithActiveLoans = new Set();
    loans.forEach((loan) => {
      if (loan?.loanStatus === "active") {
        customersWithActiveLoans.add(loan?.customerId);
      }
    });

    return customers.filter((edge) => customersWithActiveLoans.has(edge._id))
      .length;
  }, [customers, loans]);
  return (
    <InformationWidget
      title="Con creditos Activos"
      data={activeCustomerCount}
      width={width}
      icon={<UsergroupDeleteOutlined style={{ color: "blue" }} />}
    />
  );
}

export function TotalCustomersCountWidget({ width }: { width?: string }) {
  const customers = useGetCustomers();
  const totalCustomers = useMemo(() => customers.length, [customers]);
  return (
    <InformationWidget
      title="Clientes Totales"
      data={totalCustomers}
      width={width}
      icon={<UsergroupAddOutlined style={{ color: "green" }} />}
    />
  );
}

export function NewCustomerWidget({ width }: { width?: string }) {
  const dispatch = useDispatch();
  return (
    <Card
      title="Agregar Cliente"
      className={!width ? " w-1/2" : width}
      type="inner"
    >
      <AddOrEditCustomer />
      <Button
        onClick={() => {
          dispatch(setShowCreateCustomerModal(true));
        }}
        type="primary"
        className="w-full"
      >
        <PlusOutlined />
        Nuevo
      </Button>
    </Card>
  );
}
