import React from 'react';
import { MdDelete } from 'react-icons/md'

import './styles.css';

export default function Reservas() {
 return (
  <div>
    <h1 className="title">Voce solicitou 1 reservas</h1>

    <div className="reservas">
      <img 
        src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/fernand-noronha.jpg" 
        alt="Fernando de Noronha"
      />
      <strong>Viagem Fernando de Noronha 7 dias</strong>
      <span>Quantidade: 2</span>
      <button
        type="button"
        onClick={() => {}}
      >
        <MdDelete size={20} color="#191919" />
      </button>
    </div>
    <footer>
      <button
        type="button"
      >
        Solicitar Reservas
      </button>
    </footer>
  </div>
  );
}