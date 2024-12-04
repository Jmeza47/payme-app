import { Button, Form, Input } from "antd";
import { useNewCustomerForm } from "../hooks/useNewCustomerForm";
import { useUpdateCustomer } from "../hooks/api/useUpdateCustomer";
import { useCreateCustomer } from "../hooks/api/useCreateCustomer";

export default function NewCustomerForm() {
  const { submittable, form, values, isEditing, editingValues } =
    useNewCustomerForm();

  const { updateCustomer } = useUpdateCustomer();

  const { addCustomer } = useCreateCustomer();

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onFinish={() =>
          isEditing
            ? updateCustomer(editingValues._id!, values)
            : addCustomer(values)
        }
        autoComplete="false"
        initialValues={
          isEditing
            ? editingValues
            : { dni: "", ref2: "", ref2Tel: "", ref1: "", ref1Tel: "" }
        }
      >
        <div className="flex space-x-3">
          <Form.Item
            label="Nombres"
            name="name"
            rules={[
              {
                required: true,
                message: "Ingrese un nombre/s para el cliente!",
              },
              {
                min: 3,
                message: "El nombre debe de tener un minimo de 3 caracteres",
              },
            ]}
            className="w-full"
          >
            <Input placeholder="Ingrese los nombres" />
          </Form.Item>
          <Form.Item
            label="Apellidos"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Ingrese el apellido/s del cliente!",
              },
              {
                min: 3,
                message: "El Apellido debe de tener un minimo de 3 caracteres",
              },
            ]}
            className="w-full"
          >
            <Input placeholder="Ingrese los apellidos" />
          </Form.Item>
        </div>

        <div className="flex space-x-3">
          <Form.Item
            label="Telefono #1"
            name="phone1"
            rules={[
              {
                required: true,
                message: "Ingrese el telefono para el cliente!",
              },
              {
                min: 9,
                message: "El telefono require 9 caracteres",
              },
              {
                max: 9,
                message: "El telefono require 9 caracteres",
              },
              {
                pattern: /^(\d{4})-\d{4}$/,
                message: "El telefono debe estar en el formato 1234 - 5678",
              },
            ]}
            className="w-full"
          >
            <Input placeholder="Ingrese el numero de telefono" />
          </Form.Item>
          <Form.Item
            label="Nº de Identidad"
            name="dni"
            rules={[
              {
                required: true,
                message: "Ingrese un numero de Identidad para el cliente!",
              },
              {
                min: 15,
                max: 15,
                message: "El numero de identidad debe contener 13 caracteres",
              },
            ]}
            className="w-full"
          >
            <Input placeholder="Ingrese el numero de identidad" />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label="Direccion"
            name="address"
            rules={[
              {
                required: true,
                message: "Ingrese la direccion del cliente!",
              },
              { min: 5, message: "La direccion es muy corta" },
              {
                max: 256,
                message:
                  "La direccion debe de tener un maximo de 256 caracteres",
              },
            ]}
          >
            <Input.TextArea
              placeholder="Ingrese la direccion"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
        </div>
        <div className="flex space-x-3">
          <Form.Item
            label="Referencia #1"
            name="ref1"
            rules={[
              {
                min: 3,
                message: "El nombre debe de tener un minimo de 3 caracteres",
              },
            ]}
            className="w-full"
          >
            <Input placeholder="Ingrese el numero de telefono" />
          </Form.Item>
          <Form.Item
            label="Telefono Referencia #1"
            name="ref1Tel"
            rules={[
              {
                min: 9,
                message: "El telefono require 9 caracteres",
              },
              {
                max: 9,
                message: "El telefono require 9 caracteres",
              },
              {
                pattern: /^(\d{4})-\d{4}$/,
                message: "El telefono debe estar en el formato 1234 - 5678",
              },
            ]}
            className="w-full"
          >
            <Input placeholder="Ingrese el numero de telefono" />
          </Form.Item>
        </div>
        <div className="flex space-x-3">
          <Form.Item
            label="Referencia #2(opcional)"
            name="ref2"
            rules={[
              {
                min: 3,
                message: "El nombre debe de tener un minimo de 3 caracteres",
              },
            ]}
            className="w-full"
          >
            <Input placeholder="Ingrese el numero de telefono" />
          </Form.Item>
          <Form.Item
            label="Telefono Referencia #2(opcional)"
            name="ref2Tel"
            rules={[
              {
                min: 9,
                message: "El telefono require 9 caracteres",
              },
              {
                max: 9,
                message: "El telefono require 9 caracteres",
              },
              {
                pattern: /^(\d{4})-\d{4}$/,
                message: "El telefono debe estar en el formato 1234 - 5678",
              },
            ]}
            className="w-full"
          >
            <Input placeholder="Ingrese el numero de telefono" />
          </Form.Item>
        </div>
        <div>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={!submittable}>
              Guardar
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
}
