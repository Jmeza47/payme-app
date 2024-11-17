import ShowCustomersTable from "./table/customersTable";
import AddOrEditCustomer from "./newCustomers/addOrEditCustomer";

export default function CustomerMainScreen() {
  return (
    <div>
      <ShowCustomersTable />
      <AddOrEditCustomer />
    </div>
  );
}
