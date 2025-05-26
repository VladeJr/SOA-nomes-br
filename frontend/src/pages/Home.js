import React from 'react';
import NomeChart from '../components/NomeChart';
import LocalidadeTable from '../components/LocalidadeTable';
import ComparacaoChart from '../components/ComparacaoChart';

export default function Home() {
  return (
    <div>
      <h1>Análise de Tendência de Nomes no Brasil</h1>
      <NomeChart />
      <hr />
      <LocalidadeTable />
      <hr />
      <ComparacaoChart />
    </div>
  );
}
