import { Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";
import error from "../assets/error.svg";
import { startTransition } from "react";
export default function ErrorElement() {
  const navigate = useNavigate();

  return (
    <Empty
      description={
        "Oops, Parece que hubo un error. Por favor intentelo de nuevo."
      }
      image={error}
      imageStyle={{ height: 600, display: "flex", justifyContent: "center" }}
    >
      <Button
        type="primary"
        onClick={() => {
          startTransition(() => {
            navigate("/");
          });
        }}
      >
        Ir a Inicio
      </Button>
    </Empty>
  );
}
