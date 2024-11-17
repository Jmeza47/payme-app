import { useAppSelector } from "../../hooks/useStore";
import useFormValidationBeforeSubmit from "../../hooks/useFormValidateBeforeSubmit";
import { useCreateCustomer } from "./api/useCreateCustomer";

export function useNewCustomerForm() {
  const { submittable, form, values } = useFormValidationBeforeSubmit();
  const { addCustomer } = useCreateCustomer();

  const isEditing = useAppSelector((state) => state.newCustomer.isEditing);
  const editingValues = useAppSelector(
    (state) => state.newCustomer.setEditingValues
  );

  return {
    submittable,
    form,
    values,
    addCustomer,
    isEditing,
    editingValues,
  };
}
