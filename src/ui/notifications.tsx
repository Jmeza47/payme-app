import { notification } from "antd";

export const successNotification = (description: string) => {
  notification.success({
    message: "Completado",
    description: description,
    type: "success",
    placement: "top",
  });
};

export const errorNotification = (description: string) => {
  notification.error({
    message: "Error",
    description: description,
    type: "error",
    placement: "top",
  });
};
