import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import api from '../services/api';

export default function ComparacaoChart() {
  const [nome1, setNome1] = useState('');
  const [nome2, setNome2] = useState('');
  const [dados, setDados] = useState(null);

  const buscarComparacao = async () => {
    const res = await api.get(`/comparacao?nome1=${nome1}&nome2=${nome2}`);
    setDados(res.data);
  };

  const chartData = dados ? {
    labels: dados.nome1.dados.map(d => d.periodo),
    datasets: [
      {
        label: nome1,
        data: dados.nome1.dados.map(d => d.frequencia),
        borderColor: 'green'
      },
      {
        label: nome2,
        data: dados.nome2.dados.map(d => d.frequencia),
        borderColor: 'red'
      }
    ]
  } : null;

  return (
    <div>
      <h3>Comparar Dois Nomes</h3>
      <input value={nome1} onChange={e => setNome1(e.target.value)} placeholder="Nome 1" />
      <input value={nome2} onChange={e => setNome2(e.target.value)} placeholder="Nome 2" />
      <button onClick={buscarComparacao}>Comparar</button>
      {dados && <Line data={chartData} />}
    </div>
  );
}
