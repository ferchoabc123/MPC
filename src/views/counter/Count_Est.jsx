import {Link} from "react-router-dom";


const count_Est = () => {

    return (
       <div className ="align-items-start" style = {{width: "100%", height: "100%"}}>
            <div class="container">
                {/* Fila de: Nombre de los personajes */}
                <div class="row text-center">
                    <div class="col-3 border border-dark border-2">
                        <h1>Mario</h1>
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <h1>Luigi</h1>
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <h1>peach</h1>
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <h1>daysi</h1>
                    </div>
                </div>
                {/* Final de: Fila de nombre de los personajes */}

               {/* Fila de: botones de victorias o casillas especiales */}
                <div class="row text-center">
                    <div class="col-3 border border-dark border-2">
                        <div class = "row">
                            <div class = "col-8 border-end border-dark border-2 ">
                                <button class="btn btn-light border border-dark">Add minigame win</button>
                            </div>
                            <div class="col-4  ">
                                <button class="btn btn-light border border-dark">Undo</button>
                            </div>
                        </div>
                        <div class = "row">
                           <div class = "col-8 border-end border-dark border-2 ">
                                <button class="btn btn-light border border-dark ps-3 pe-3">Add Event spaces</button>
                            </div>
                            <div class="col-4 ">
                                <button class="btn btn-light border border-dark">Undo</button>
                            </div>
                        </div> 
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <div class = "row">
                            <div class = "col-8 col-8 border-end border-dark border-2 ">
                                <button class="btn btn-light border border-dark">Add minigame win</button>
                            </div>
                            <div class="col-4 ">
                                <button class="btn btn-light border border-dark">Undo</button>
                            </div>
                        </div>
                        <div class = "row">
                           <div class = " col-8 border-end border-dark border-2 ">
                               <button class="btn btn-light border border-dark ps-3 pe-3">Add Event spaces</button>
                            </div>
                            <div class="col-4 ">
                                <button class="btn btn-light border border-dark">Undo</button>
                            </div>
                        </div> 
                    </div>
                    <div class="col-3 border border-dark border-2">
                       <div class = "row">
                            <div class = " col-8 border-end border-dark border-2 ">
                                <button class="btn btn-light border border-dark">Add minigame win</button>
                            </div>
                            <div class="col-4 ">
                                <button class="btn btn-light border border-dark">Undo</button>
                            </div>
                        </div>
                        <div class = "row">
                           <div class = "col-8 border-end border-dark border-2 ">
                                <button class="btn btn-light border border-dark ps-3 pe-3">Add Event spaces</button>
                            </div>
                            <div class="col-4 ">
                                <button class="btn btn-light border border-dark">Undo</button>
                            </div>
                        </div> 
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <div class = "row">
                            <div class = "col-8 border-end border-dark border-2  ">
                                <button class="btn btn-light border border-dark">Add minigame win</button>
                            </div>
                            <div class="col-4 ">
                                <button class="btn btn-light border border-dark">Undo</button>
                            </div>
                        </div>
                        <div class = "row">
                           <div class = "col-8 border-end border-dark border-2 ">
                                <button class="btn btn-light border border-dark ps-3 pe-3">Add Event spaces</button>
                            </div>
                            <div class="col-4 ">
                                <button class="btn btn-light border border-dark">Undo</button>
                            </div>
                        </div> 
                    </div>
                </div>
            {/* Final de: Fila para añadir wins o casillas especiales */}
            {/*Fila de: Botones para añadir Monedas */}
               <div class="row text-center">
                    <div class="col-3 border border-dark border-2">
                        <div class="row">
                            <div class="col-5 border border-dark">
                            <button class="btn btn-light border border-dark pe-3 ps-3"> 12 coins</button>
                            <button class="btn btn-light border border-dark ps-4 pe-4"> 6 coin</button>
                            <button class="btn btn-light border border-dark ps-4 pe-4"> 3 coin</button>
                        </div>
                        <div class="col-7 border border-dark aling-items-center justify-content-center d-flex flex-column">

                            <input type="number" class= "form-control form-control-sm text-center mt-2" placeholder="0"/>
                            <button class="btn btn-sm btn-light border border-dark ps-4 pe-4"> Add custom</button>
      
                        </div>
                        </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <div class="row">
                            <div class="col-5 border border-dark">
                            <button class="btn btn-light border border-dark pe-3 ps-3"> 12 coins</button>
                            <button class="btn btn-light border border-dark ps-4 pe-4"> 6 coin</button>
                            <button class="btn btn-light border border-dark ps-4 pe-4"> 3 coin</button>
                        </div>
                        <div class="col-7 border border-dark aling-items-center justify-content-center d-flex flex-column">

                            <input type="number" class= "form-control form-control-sm text-center mt-2" placeholder="0"/>
                            <button class="btn btn-sm btn-light border border-dark ps-4 pe-4"> Add custom</button>
      
                        </div>
                        </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <div class="row">
                            <div class="col-5 border border-dark">
                            <button class="btn btn-light border border-dark pe-3 ps-3"> 12 coins</button>
                            <button class="btn btn-light border border-dark ps-4 pe-4"> 6 coin</button>
                            <button class="btn btn-light border border-dark ps-4 pe-4"> 3 coin</button>
                        </div>
                        <div class="col-7 border border-dark aling-items-center justify-content-center d-flex flex-column">

                            <input type="number" class= "form-control form-control-sm text-center mt-2" placeholder="0"/>
                            <button class="btn btn-sm btn-light border border-dark ps-4 pe-4"> Add custom</button>
      
                        </div>
                        </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <div class="row">
                            <div class="col-5 border border-dark">
                            <button class="btn btn-light border border-dark pe-3 ps-3"> 12 coins</button>
                            <button class="btn btn-light border border-dark ps-4 pe-4"> 6 coin</button>
                            <button class="btn btn-light border border-dark ps-4 pe-4"> 3 coin</button>
                        </div>
                        <div class="col-7 border border-dark aling-items-center justify-content-center d-flex flex-column">

                            <input type="number" class= "form-control form-control-sm text-center mt-2" placeholder="0"/>
                            <button class="btn btn-sm btn-light border border-dark ps-4 pe-4"> Add custom</button>
      
                        </div>
                        </div>
                    </div>
                </div>
                {/* Final de: Fila para añadir monedas */}
                {/* Fila de: puntaje */}
                <div class="row text-center">
                    <div class="col-3 border border-dark border-2">
                        <div class ="row">
                            <div class="col-7 gap-2 text-start border-end border-dark border-2"> 
                                <h5>Minigame won:</h5>
                                <h5>Event spaces:</h5>
                                <h5>Totals coins:</h5>
                            </div>
                            <div class="col-5">
                                <p id ="minigame-P1"> 0 </p>
                                <p id ="event-P1"> 0 </p>
                                <p id ="coins-P1"> 0 </p>
                            </div>

                        </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <div class ="row">
                            <div class="col-7 gap-2 text-start border-end border-dark border-2"> 
                                <h5>Minigame won:</h5>
                                <h5>Event spaces:</h5>
                                <h5>Totals coins:</h5>
                            </div>
                            <div class="col-5">
                                <p id ="minigame-P2"> 0 </p>
                                <p id ="event-P2"> 0 </p>
                                <p id ="coins-P2"> 0 </p>
                            </div>

                        </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                         <div class ="row">
                            <div class="col-7 gap-2 text-start border-end border-dark border-2"> 
                                <h5>Minigame won:</h5>
                                <h5>Event spaces:</h5>
                                <h5>Totals coins:</h5>
                            </div>
                            <div class="col-5">
                                <p id ="minigame-P3"> 0 </p>
                                <p id ="event-P3"> 0 </p>
                                <p id ="coins-P3"> 0 </p>
                            </div>

                        </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                        <div class ="row">
                            <div class="col-7 gap-2 text-start border-end border-dark border-2"> 
                                <h5>Minigame won:</h5>
                                <h5>Event spaces:</h5>
                                <h5>Totals coins:</h5>
                            </div>
                            <div class="col-5">
                                <p id ="minigame-p4"> 0 </p>
                                <p id ="event-P4"> 0 </p>
                                <p id ="coins-P4"> 0 </p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Final de: Fila de puntaje */}
                {/* Fila de: Iconos */}
                <div class="row text-center">
                    <div class="col-3 border border-dark border-2">
                       <div class="row">
                        <div class="col-4 border border-dark border-2"><h5>minijuego</h5></div>
                        <div class="col-4 border border-dark border-2"><h5>casillas especiales</h5></div>
                        <div class="col-4 border border-dark border-2"><h5>monedas</h5></div>
                       </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                        <div class="row">
                        <div class="col-4 border border-dark border-2"><h5>minijuego</h5></div>
                        <div class="col-4 border border-dark border-2"><h5>casillas especiales</h5></div>
                        <div class="col-4 border border-dark border-2"><h5>monedas</h5></div>
                       </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                        <div class="row">
                        <div class="col-4 border border-dark border-2"><h5>minijuego</h5></div>
                        <div class="col-4 border border-dark border-2"><h5>casillas especiales</h5></div>
                        <div class="col-4 border border-dark border-2"><h5>monedas</h5></div>
                       </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                        <div class="row">
                        <div class="col-4 border border-dark border-2"><h5>minijuego</h5></div>
                        <div class="col-4 border border-dark border-2"><h5>casillas especiales</h5></div>
                        <div class="col-4 border border-dark border-2"><h5>monedas</h5></div>
                       </div>
                    </div>


                </div>
                {/* Final de: Fila de Iconos */}
                {/*  Fila de: Posicion */}
                <div class="row text-center">
                    <div class="col-3 border border-dark border-2">
                       <div class="row">
                        <div class="col-4 border border-dark border-2"><h5 id="score-Mg-P1">1</h5></div>
                        <div class="col-4 border border-dark border-2"><h5 id="score-ES-P1">3</h5></div>
                        <div class="col-4 border border-dark border-2"><h5 id="score-Coins-P1">2</h5></div>
                       </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                        <div class="row">
                        <div class="col-4 border border-dark border-2"><h5 id="score-Mg-P2">3</h5></div>
                        <div class="col-4 border border-dark border-2"><h5 id="score-ES-P2">2</h5></div>
                        <div class="col-4 border border-dark border-2"><h5 id="score-Coins-P2">1</h5></div>
                       </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                        <div class="row">
                        <div class="col-4 border border-dark border-2"><h5 id="score-Mg-P3">2</h5></div>
                        <div class="col-4 border border-dark border-2"><h5 id="score-ES-P3">1</h5></div>
                        <div class="col-4 border border-dark border-2"><h5 id="score-Coins-P3">3</h5></div>
                       </div>
                    </div>
                    <div class="col-3 border border-dark border-2">
                        <div class="row">
                        <div class="col-4 border border-dark border-2"><h5 id="score-Mg-P4">4</h5></div>
                        <div class="col-4 border border-dark border-2"><h5 id="score-ES-P4">4</h5></div>
                        <div class="col-4 border border-dark border-2"><h5 id="score-Coins-P4">4</h5></div>
                       </div>
                    </div>

                </div>
                 {/*  Fila de: Fila de posicion */}
        </div>
    </div>
    )
}

export default count_Est;