import React from "react";
import { useDispatch } from "react-redux";
import { addData } from "./store/date";

function App() {
  const [partida, setPartida] = React.useState();
  const [retorno, setRetorno] = React.useState();

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(addData({ retorno, partida }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="partida">Partida</label>
        <input
          type="date"
          id="partida"
          value={partida}
          onChange={({ target }) => setPartida(target.value)}
        />
      </p>
      <p>
        <label htmlFor="retorno">Retorno</label>
        <input
          type="date"
          id="retorno"
          value={retorno}
          onChange={({ target }) => setRetorno(target.value)}
        />
      </p>
      <button>Buscar</button>
    </form>
  );
}

export default App;
