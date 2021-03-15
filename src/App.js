import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  //O hook useSelector é utilizado para termos acesso ao estado do Redux em qualquer local da nossa aplicação.
  const state = useSelector((state) => state);
  // O hook useDispatch é utilizado para despacharmos ações para a nossa store.
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Total: {state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Incrementar
      </button>
    </div>
  );
};

export default App;
