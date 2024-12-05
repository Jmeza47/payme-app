import { Spin } from "antd";
import React, { Suspense } from "react";

const ShowCustomersTable = React.lazy(() => import("./table/customersTable"));
const AddOrEditCustomer = React.lazy(
  () => import("./newCustomers/addOrEditCustomer")
);

export default function CustomerMainScreen() {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          className="flex justify-center items-center h-full"
        />
      }
    >
      <AddOrEditCustomer />
      <ShowCustomersTable />
    </Suspense>
  );
}
