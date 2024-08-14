import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [contador, setcontador] = useState(10)
  let cont = 0;
  function tratarClipe() {

    cont++;
    console.log(cont);
   
  } 
  function incrementarContador(){
      setcontador(contador + 1)

    }
  return (

    <>
      <h1>titulo</h1>

      <button onClick={tratarClipe}>clique</button>
      <div>
        {cont}
      </div>

      <button onClick={incrementarContador}>Inc usestate</button>
      <div>
        {contador}
      </div>
    </>



  )
}

export default App
