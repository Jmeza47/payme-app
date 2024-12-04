import { Table, Input, Card, TableColumnsType } from "antd";
import { ICustomer } from "../../common/types";
import { RowActions } from "./rowActions";
import React, { useMemo, useState } from "react";
import {
  CustomersWithActiveCreditsWidget,
  NewCustomerWidget,
  TotalCustomersCountWidget,
} from "../widgets/widgets";

import { useGetCustomers } from "../hooks/api/useGetCustomers";

const { Search } = Input;

interface DataType {
  name: string;
  lastName: string;
  address: string;
  dni: string;
  phone1: string;
  options: React.Component;
}

export default function ShowCustomersTable() {
  const { customers, loading } = useGetCustomers();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers =
    customers?.filter((edge) => {
      const customer = edge;
      if (!customer) return false;

      const fullName = `${customer.name} ${customer.lastName}`.toLowerCase();
      const phone = customer.phone1?.toLowerCase(); // Handle potential undefined

      return (
        fullName.includes(searchQuery.toLowerCase()) ||
        (phone && phone.includes(searchQuery.toLowerCase()))
      );
    }) || [];

  const columns: TableColumnsType<DataType> = useMemo(
    () => [
      {
        title: "Nombre",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => b.name.localeCompare(a.name),
        sortOrder: { order: "ascend", columnKey: "name" },
        sortIcon: () => null,
        showSorterTooltip: false,
      },
      {
        title: "Apellido",
        dataIndex: "lastName",
        key: "lastName",
      },
      {
        title: "Nº de Identidad",
        dataIndex: "dni",
        key: "dni",
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
          loading={loading}
          dataSource={filteredCustomers.map((edge) => edge)}
          pagination={{ pageSize: 5, simple: true }}
          rowKey="_id"
        />
      </Card>
    </div>
  );
}
