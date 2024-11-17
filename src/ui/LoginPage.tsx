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
import { Button, Card, Input, notification } from "antd";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      notification.success({
        message: "Login Successful",
        description: `Welcome, ${email}`,
        type: "success",
        placement: "top",
      });
      // Successful login, redirect or perform other actions
    } catch {
      setError("Error al autentificar usuario/contrasena incorrecto");
    }
  };

  return (
    <div className="w-dvw h-dvh flex justify-center items-center overflow-auto">
      {error && <p>{error}</p>}

      <Card className="w-1/6 h-1/3 flex flex-col justify-center">
        <div className="space-y-8">
          <Input
            type="email"
            placeholder="Correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} type="primary" className="w-full">
            Ingresar
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Login;
