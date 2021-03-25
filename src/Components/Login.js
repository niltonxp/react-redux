import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/login";

import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form onSubmit={handleSubmit} className="anime">
      <label className={styles.label} htmlFor="username">
        Usuário
      </label>
      <input
        id="username"
        className={styles.input}
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label className={styles.label} htmlFor="password">
        Senha
      </label>
      <input
        id="password"
        className={styles.input}
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button className={styles.button}>Enviar</button>
    </form>
  );
};

export default Login;
