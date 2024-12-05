import { useMemo } from "react";
import { InformationWidget } from "../../ui/informationWidget";
import { Button, Card } from "antd";
import { setShowCreateCustomerModal } from "../customerSlice";
import {
  PlusOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import AddOrEditCustomer from "../newCustomers/addOrEditCustomer";
import { useGetCustomers } from "../hooks/api/useGetCustomers";
import { useGetLoans } from "../../loans/hooks/api/useGetLoans";

export function CustomersWithActiveCreditsWidget({
  width,
}: {
  width?: string;
}) {
  const { loans } = useGetLoans();
  const { customers } = useGetCustomers();

  const activeCustomerCount = useMemo(() => {
    if (!loans || !customers) return 0;

    const activeCustomerIds = new Set(
      loans
        .filter((loan) => loan?.loanStatus === "active")
        .map((loan) => loan.customerId)
    );

    return customers.filter((customer) => activeCustomerIds.has(customer._id))
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
  const { customers } = useGetCustomers();
  const totalCustomers = useMemo(() => {
    if (!customers) return 0;
    return customers.length;
  }, [customers]);

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

  const handleClick = useMemo(
    () => () => {
      dispatch(setShowCreateCustomerModal(true));
    },
    [dispatch]
  );
  return (
    <Card
      title="Agregar Cliente"
      className={!width ? " w-1/2" : width}
      type="inner"
    >
      <AddOrEditCustomer />
      <Button onClick={handleClick} type="primary" className="w-full">
        <PlusOutlined />
        Nuevo
      </Button>
    </Card>
  );
}
