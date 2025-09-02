import React, { useState } from 'react';
//jugadores que participaran
const jugadoresIniciales = [
  { id: 1, nombre: 'P1', minigameWins: 0, eventSpaces: 0, coins: 0, customValue: ''},
  { id: 2, nombre: 'P2', minigameWins: 0, eventSpaces: 0, coins: 0, customValue: ''},
  { id: 3, nombre: 'P3', minigameWins: 0, eventSpaces: 0, coins: 0, customValue: ''},
  { id: 4, nombre: 'P4', minigameWins: 0, eventSpaces: 0, coins: 0, customValue: ''},
];

function Scoreboard() {
  //se crea un array de jugadores
  const [jugadores, setJugadores] = useState(jugadoresIniciales);
  
//Actualizar a los jugadores en sus atributos de minigame, eventSpaces, coins
  const handleUpdate = (id, tipo, valor) => {
    setJugadores(
      jugadores.map((jugador) =>
        jugador.id === id ? { ...jugador, [tipo]: jugador[tipo] + valor } : jugador
      )
    );
  };
// tener control sobre el valor del input y poder utilizarlo al precionar el boton addCustom
  const handleInputChange = (id, e) => {
  const valor = parseInt(e.target.value, 10) || 0;
  setJugadores(
    jugadores.map((j) => (j.id === id ? { ...j, customValue: valor } : j))
  );
};
// funcion para encontrar a los jugadores y poder añadir las monedas 
const handleAddCustom = (id) => {
  // Encuentra el jugador que vas a actualizar.
  const jugadorAActualizar = jugadores.find((j) => j.id === id);

  // Si el jugador existe, procede.
  if (jugadorAActualizar) {
    // Convierte el valor del input a un número entero.
    const valorNumerico = parseInt(jugadorAActualizar.customValue, 10);

    // Usa un condicional para verificar si valorNumerico NO es NaN.
    if (!isNaN(valorNumerico)) {
      setJugadores(
        jugadores.map((j) =>
          j.id === id
            ? { ...j, coins: j.coins + valorNumerico, customValue: '' }
            : j
        )
      );
    } else {
      console.log('El valor introducido no es un número válido.');
    }
  }
};



  return (
    <div className="align-items-start" style={{ width: "100%", height: "100%", marginBottom: "0.2rem"}}>
      <div className="container">
        {/* Fila de Nombres :: iteramos sobre el array jugadores con .map para construir cada titulo */}
        <div className="row text-center border border-dark border-3">
          {jugadores.map((jugador) => (
            <div className="col-3 border border-dark border-3" key={jugador.id}>
              <h1>{jugador.nombre}</h1>
            </div>
          ))}
        </div>
        <hr />
        
        {/* Fila de Botones de victorias y eventos :: utilizando .map se va construyendo la fila para cada jugador*/}
        <div className="row text-center">
          {jugadores.map((jugador) => (
            <div className="col-3 border border-dark border-3" key={jugador.id}>
              <div className="row">
                <div className="col-8 border-end border-dark border-3">
                  <button onClick={() => handleUpdate(jugador.id, 'minigameWins', 1)} className="btn btn-light border border-dark">Add minigame win</button>
                </div>
                <div className="col-4">
                  <button onClick={() => handleUpdate(jugador.id, 'minigameWins', -1)} className="btn btn-light border border-dark">Undo</button>
                </div>
              </div>
              <div className="row">
                <div className="col-8 border-end border-dark border-3">
                  <button onClick={() => handleUpdate(jugador.id, 'eventSpaces', 1)} className="btn btn-light border border-dark ps-3 pe-3">Add Event spaces</button>
                </div>
                <div className="col-4">
                  <button onClick={() => handleUpdate(jugador.id, 'eventSpaces', -1)} className="btn btn-light border border-dark">Undo</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />

        {/* Fila de Botones para añadir Monedas */}
        <div className="row text-center">
          {jugadores.map((jugador) => (
            <div className="col-3 border border-dark border-3" key={jugador.id}>
              <div className="row">
                <div className="col-5 border-end border-dark border-3 d-flex flex-column gap-2">
                  <button onClick={() => handleUpdate(jugador.id, 'coins', 12)} className="btn btn-light border border-dark">12 coins</button>
                  <button onClick={() => handleUpdate(jugador.id, 'coins', 6)} className="btn btn-light border border-dark">6 coins</button>
                  <button onClick={() => handleUpdate(jugador.id, 'coins', 3)} className="btn btn-light border border-dark">3 coins</button>
                </div>
                <div className="col-7 d-flex flex-column align-items-center justify-content-center">
                  <input
                    type="number"
                    value={jugador.customValue} // El valor del input está controlado por el estado
                    onChange={(e) => handleInputChange(jugador.id, e)}
                    className="form-control form-control-sm text-center mt-2"
                    placeholder="0"
                  />
                  <button
                    onClick={() => handleAddCustom(jugador.id)}
                    className="btn btn-sm btn-light border border-dark ps-4 pe-4"
                  >
                  Add custom
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        
        {/* Fila de puntaje */}
        <div className="row text-center">
          {jugadores.map((jugador) => (
            <div className="col-3 border border-dark border-3" key={jugador.id}>
              <div className="row">
                <div className="col-7 gap-2 text-start border-end border-dark border-3">
                  <h5>Minigame won:</h5>
                  <h5>Event spaces:</h5>
                  <h5>Totals coins:</h5>
                </div>
                <div className="col-5">
                  <p>{jugador.minigameWins}</p>
                  <p>{jugador.eventSpaces}</p>
                  <p>{jugador.coins}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
        
      </div>
    </div>
  );
}

export default Scoreboard;