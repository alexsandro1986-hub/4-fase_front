import { useState } from 'react';
import './Body.css';
import Agendamento from './Agendamento'; // Importando o novo componente

function Body() {
  
  const [normalsenha, setNormalSenha] = useState(0);
  const [preferencialsenha, setPreferencialSenha] = useState(0);
  const [filaNormal, setFilaNormal] = useState([]); // Fila de senhas normais
  const [filaPreferencial, setFilaPreferencial] = useState([]); // Fila de senhas preferenciais
  const [senhaAtual, setSenhaAtual] = useState(null); // Senha que está sendo atendida

  

  function normal() {
    const novaSenha = normalsenha + 1;
    setNormalSenha(novaSenha);
    setFilaNormal([...filaNormal, `N${novaSenha}`]); // Adiciona a nova senha na fila normal
  }

  function preferencial() {
    const novaSenha = preferencialsenha + 1;
    setPreferencialSenha(novaSenha);
    setFilaPreferencial([...filaPreferencial, `P${novaSenha}`]); // Adiciona a nova senha na fila preferencial
  }

  // Função para tirar senhas, priorizando a preferencial
  function tirarSenha() {
    if (filaPreferencial.length > 0) {
      const senha = filaPreferencial.shift(); // Retira a primeira senha preferencial
      setSenhaAtual(senha); // Define como a senha atual
      setFilaPreferencial([...filaPreferencial]); // Atualiza a fila de preferenciais
    } else if (filaNormal.length > 0) {
      const senha = filaNormal.shift(); // Retira a primeira senha normal
      setSenhaAtual(senha); // Define como a senha atual
      setFilaNormal([...filaNormal]); // Atualiza a fila de normais
    } else {
      setSenhaAtual('Nenhuma senha disponível'); // Caso não tenha senhas
    }
  }

  return (
    <div className="body-container">
      <div className='body'>
        <h1>Farmacia Raisen</h1>

        {/* Componente de agendamento */}
        <Agendamento senhaAgendada={senhaAtual} />

        <div className='fotos-container'>
          <p className='teste'>
            A Farmácia Raisen tem o prazer de anunciar uma nova liderança!
            Com uma visão inovadora e compromisso com a excelência no atendimento,
            nossa nova gestão está dedicada a continuar oferecendo produtos de
            qualidade e um serviço ainda mais personalizado para você.
            Agradecemos pela confiança e estamos prontos para cuidar de sua saúde
            com ainda mais dedicação. Venha nos visitar<br />
          </p>
          <img src="./images/farmarcia.PNG.png" alt="" />
        </div>

        <div className='fotos-container1'>
          <div className='fotos-1'>
            <img src="./images/placa.png" alt="" />
            <img src="./images/cartoes.png" alt="" />
          </div>
        </div>

        <div className='fotos-container2'>
          <p className='teste'>
            Nossa farmácia está sob nova liderança e, para comemorar,
            lançamos uma campanha especial de descontos em medicamentos e produtos de saúde.
            Com um compromisso renovado em oferecer atendimento de qualidade, trazemos ofertas
            exclusivas para cuidar da sua saúde e bem-estar. Venha conferir nossas promoções e
            aproveite para economizar. Nossa equipe está pronta para atendê-lo com atenção e dedicação.
            Sua saúde é nossa prioridade!
          </p>
          <div className='fotos-2'>
            <img src="./images/camisa.png" alt="" />
            <img src="./images/camisetas.png" alt="" />
          </div>
        </div>


      <div className='btn-container'>
        

        <div className='senha-container'>
          <button className='btn-normal' onClick={normal}>Normal</button>
          <div>Fila Normal: N: {filaNormal.length}</div> {/* Exibe as senhas normais na fila */}

          <button className='btn-preferencial' onClick={preferencial}>Preferencial</button>
          <div>Fila Preferencial: P: {filaPreferencial.length}</div> {/* Exibe as senhas preferenciais na fila */}
        </div>

        {/* Botão para tirar a próxima senha */}
        <div className='tirar-senha'>
          <button className='btn-senha' onClick={tirarSenha}>Tirar Senha</button>
          <div>Senha Atual: {senhaAtual}</div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Body;
