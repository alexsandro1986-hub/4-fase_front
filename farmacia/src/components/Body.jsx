import { useState } from 'react'
import './Body.css'

function Body() {
  const [contador, setcontador] = useState(0)
  const [ncontador, setncontador] = useState(0)
  function gostei() {
    setcontador(contador + 1)
  }
  function ngostei() {
    setncontador(ncontador - 1)
  }

  return (
    <div className="body-container">
      <div className='body'>
        <h1>Página Body</h1>

        <img src="./images/farmarcia-camiseta.PNG.png" alt="" />
      </div>

      <div>
        <button onClick={gostei}>Gostei</button>
        <div>
          {contador}
        </div>

        <button onClick={ngostei}>Não gostei</button>
        <div>
          {ncontador}
        </div>
      </div>


    </div>
  )
}

export default Body