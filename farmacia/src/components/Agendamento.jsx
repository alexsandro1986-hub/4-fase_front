// Agendamento.jsx
import React from 'react';

function Agendamento({ senhaAgendada }) {
  return (
    <div>
      <h2>Sua Senha Agendada</h2>
      <p>{senhaAgendada ? `Senha: ${senhaAgendada}` : 'Nenhuma senha agendada'}</p>
    </div>
  );
}

export default Agendamento;
