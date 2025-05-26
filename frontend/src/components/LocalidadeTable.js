import React, { useState } from 'react';
import api from '../services/api';

export default function LocalidadeTable() {
  const [uf, setUf] = useState('');
  const [dados, setDados] = useState([]);

  const buscarTop3 = async () => {
    const res = await api.get(`/localidade/${uf}`);
    setDados(res.data);
  };

  return (
    <div>
      <h3>Top 3 Nomes por UF</h3>
      <input type="text" value={uf} onChange={e => setUf(e.target.value)} placeholder="Ex: SP" />
      <button onClick={buscarTop3}>Buscar</button>

      {dados.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Frequência</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, i) => (
              <tr key={i}>
                <td>{item.nome}</td>
                <td>{item.frequencia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
