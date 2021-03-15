import React from "react";
import { connect } from "react-redux";

const incrementar = () => ({ type: "INCREMENTAR" });

const App = ({ contador, incrementar }) => {
  return (
    <div>
      <h1>Total: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

// Antes dos hooks, era necessario conectarmos o Redux ao componente
// para utilizar o estado/dispatch.
const mapStateToProps = (state) => {
  return {
    contador: state,
  };
};

// Com o mapDispatchToProps não precisamos utilizar o dispatch para
// dispararmos uma função.
const mapDispatchToProps = {
  incrementar,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
