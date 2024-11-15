import { useAppSelector } from "../../hooks/useStore";
import useFormValidationBeforeSubmit from "../../hooks/useFormValidateBeforeSubmit";
import { useCreateCustomer } from "./useCreateCustomer";

export function useNewCustomerForm() {
  const { submittable, form, values } = useFormValidationBeforeSubmit();
  const { handleCreateCustomer } = useCreateCustomer();

  const isEditing = useAppSelector((state) => state.newCustomer.isEditing);
  const editingValues = useAppSelector(
    (state) => state.newCustomer.setEditingValues
  );

  return {
    submittable,
    form,
    values,
    handleCreateCustomer,
    isEditing,
    editingValues,
  };
}
