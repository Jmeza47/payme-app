/*import { auth } from "../firebase"; // import Firebase auth instance
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { notification } from "antd"; // Optional: For notifications on success/error

const LoginPage = (onLogin) => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Show a success notification
      notification.success({
        message: "Login Successful",
        description: `Welcome, ${user.displayName}`,
        type: "success",
        placement: "top",
      });

      onLogin(user); // Pass user data to parent component
    } catch (error) {
      // Show error notification
      notification.error({
        message: "Login Failed",
        description: error.message,
        type: "error",
        placement: "top",
      });
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Please Sign in to Continue</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
*/

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Button, Card, Form, Input, notification } from "antd";
import { LockOutlined } from "@ant-design/icons";
import useFormValidationBeforeSubmit from "../hooks/useFormValidateBeforeSubmit";

function Login() {
  const [error, setError] = useState(null);
  const { form, values } = useFormValidationBeforeSubmit();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      notification.success({
        message: "Login Successful",
        description: `Bienvenido, ${values.email}`,
        type: "success",
        placement: "top",
      });
    } catch {
      setError("usuario/contrasena incorrecto");
    }
  };

  return (
    <div className="w-dvw h-dvh flex justify-center items-center overflow-auto bg-gradient-to-r from-slate-500 to-slate-800">
      <Card className="w-1/4 h-fit flex flex-col justify-center">
        <div className="space-y-8 flex flex-col items-center p-8">
          <img src="./logo.png" width={80} />
          <Form
            form={form}
            initialValues={{ email: "", password: "" }}
            layout="vertical"
            className="w-full"
            onFinish={handleLogin}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Por favor introduzca el correo" },
              ]}
            >
              <Input
                type="email"
                placeholder="Correo electronico"
                onChange={() => {
                  setError(null);
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Por favor la contrasena" }]}
            >
              <Input
                type="password"
                placeholder="Contraseña"
                prefix={<LockOutlined />}
                onChange={() => {
                  setError(null);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Ingresar
              </Button>
            </Form.Item>
          </Form>

          {error && <p className=" text-red-600">{error}</p>}
        </div>
      </Card>
    </div>
  );
}

export default Login;
