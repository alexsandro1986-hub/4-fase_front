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
        <h1>Farmacia Raisen</h1>

        <div className='fotos-container'>
          <p className='teste'>A Farmácia Raisen tem o prazer de anunciar uma nova liderança!
            Com uma visão inovadora e compromisso com a excelência no atendimento,
            nossa nova gestão está dedicada a continuar oferecendo produtos de
            qualidade e um serviço ainda mais personalizado para você.
            Agradecemos pela confiança e estamos prontos para cuidar de sua saúde
            com ainda mais dedicação. Venha nos visitar<br /></p>
          <div className='fotos-1'>
            <img src="./images/placa.png" alt="" />

            <img src="./images/cartoes.png" alt="" />

          </div>

        </div>

          <div className='farmacia-teste'>
             <img src="./images/farmacia.png" alt="" />
          </div>
       

        <div className='fotos-container2'>
          <p className='teste'>Nossa farmácia está sob nova liderança e, para comemorar,
            lançamos uma campanha especial de descontos em medicamentos e produtos de saúde.
            Com um compromisso renovado em oferecer atendimento de qualidade, trazemos ofertas
            exclusivas para cuidar da sua saúde e bem-estar. Venha conferir nossas promoções e
            aproveite para economizar. Nossa equipe está pronta para atendê-lo com atenção e dedicação.
            Sua saúde é nossa prioridade!</p>
          <div className='fotos-2'>
            <img src="./images/camisa.png" alt="" />
            <img src="./images/camisetas.png" alt="" />

            </div>
          </div>

            <div className='btn-gostei'>
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



    </div>
  )
}

export default Body