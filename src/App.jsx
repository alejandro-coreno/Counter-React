import { useState, useEffect } from "react"
import './App.css';


const App = ({ value }) => {

  // Estado para incrementar o decremetar el contador
  const [counter, setCounter] = useState(value);

  // Estado para ocultar el contador 
  const [esconder, setEsconder] = useState(true);

  // Modifica el estado del boton
  const handleMostrar = () => {
    setEsconder(!esconder);
  }

  // Permite si cambio el estado de algun componente
  // useEffect(() => {
  //   // setCounter(counter + 1 )
  //   // contador ++;
  //   // localStorage.setItem('contador', String(contador));

    
  //   // if (counter === 10) {
  //   //   // console.log(`Has realizado ${counter} veces se reiniciara el contador y empezara en 10`);
  //   //   // localStorage.removeItem('contador');
  //   //   setCounter(0);
  //   //   // contador = 0;
  //   //   console.log(counter)
  //   // }
  // }, [esconder])

  return (

    <div className="conteiner">

      {/* Renderizamos dependiendo del valor del estado ocultar */}
      <div className="info">
        {
          esconder ?
            <>
              <h1 className="counter">Counter App</h1>
              <h1 className="counter">{counter}</h1>
            </>
            :
            <h4 className="subtitle">~ No hay Contador</h4>
        }
      </div>


      <div className="controls">

        {
          esconder &&
          <>
            <button className="btn increment" onClick={() => setCounter(counter + 1)}>Incrementar</button>
            <button className="btn decrement" onClick={() => setCounter(counter - 1)}>Decrementar</button>
          </>
        }

        <button className="btn mostrar" onClick={handleMostrar}>{esconder ? 'Ocultar' : 'Mostrar'}</button>

      </div>
    </div>
  );
}

export default App;