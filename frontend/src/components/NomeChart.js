import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import api from '../services/api';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function NomeChart() {
  const [nome, setNome] = useState('');
  const [dados, setDados] = useState(null);

  const buscarNome = async () => {
    const res = await api.get(`/nome/${nome}`);
    setDados(res.data);
  };

  const chartData = dados ? {
    labels: dados.map(d => d.periodo),
    datasets: [{
      label: `Frequência de "${nome}"`,
      data: dados.map(d => d.frequencia),
      borderColor: 'blue',
      fill: false
    }]
  } : null;

  return (
    <div>
      <h3>Evolução de um Nome</h3>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
      <button onClick={buscarNome}>Buscar</button>
      {dados && <Line data={chartData} />}
    </div>
  );
}
