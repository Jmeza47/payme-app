import { useGetCustomers } from "../hooks/useGetCustomersAWS";
import { Table, Input, Card } from "antd";
import { ICustomer } from "../../common/types";
import { RowActions } from "./rowActions";
import { useMemo, useState } from "react";
//import { graphql } from "relay-runtime";
import { customersTable$key } from "./__generated__/customersTable.graphql";
import {
  CustomersWithActiveCreditsWidget,
  NewCustomerWidget,
  TotalCustomersCountWidget,
} from "../widgets/widgets";

const { Search } = Input;

type Props = {
  customersFragmentKey: customersTable$key | null;
};

/*const customersFragment = graphql`
  fragment customersTable on CustomerEdge @relay(plural: true) {
    node {
      _id
      name
      lastName
      phone1
      phone2
      address
      ref1
      ref1Tel
      ref2
      ref2Tel
    }
  }
`;*/

export default function ShowCustomersTable({ customersFragmentKey }: Props) {
  //const customers = useFragment(customersFragment, customersFragmentKey);
  const customers = useGetCustomers();
  const [searchQuery, setSearchQuery] = useState("");

  const isLoading = !customersFragmentKey || !customers;

  const filteredCustomers =
    customers?.filter((edge) => {
      const customer = edge.node;
      if (!customer) return false;

      const fullName = `${customer.name} ${customer.lastName}`.toLowerCase();
      const phone = customer.phone1?.toLowerCase(); // Handle potential undefined

      return (
        fullName.includes(searchQuery.toLowerCase()) ||
        (phone && phone.includes(searchQuery.toLowerCase()))
      );
    }) || [];

  const columns = useMemo(
    () => [
      {
        title: "Nombre",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Apellido",
        dataIndex: "lastName",
        key: "lastName",
      },
      {
        title: "Teléfono",
        dataIndex: "phone1",
        key: "phone1",
      },
      {
        title: "Dirección",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Opciones",
        key: "options",
        render: (record: ICustomer) => <RowActions customerRecord={record} />,
      },
    ],
    []
  );

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 justify-between">
        <NewCustomerWidget />
        <Card title="Buscar cliente" className="w-full" type="inner">
          <div className="flex justify-center">
            <Search
              placeholder="Buscar por nombre, apellido o numero de telefono"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </Card>
        <TotalCustomersCountWidget width="w-1/3" />
        <CustomersWithActiveCreditsWidget width="w-1/3" />
      </div>

      <Card title="Informacion de clientes">
        <Table
          columns={columns}
          loading={isLoading}
          dataSource={filteredCustomers.map((edge) => edge.node)}
          pagination={{ pageSize: 5, simple: true }}
          rowKey="_id"
        />
      </Card>
    </div>
  );
}
