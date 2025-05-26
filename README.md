# 📊 Sistema SOA: Análise de Tendência de Nomes no Brasil

Este projeto consiste em um sistema orientado a serviços (SOA) que consome a [API pública de nomes do IBGE](https://servicodados.ibge.gov.br/api/docs/nomes) para fornecer análises sobre a popularidade de nomes próprios no Brasil desde a década de 1930.

---

## 🎯 Objetivo

Aplicar os princípios da arquitetura SOA para desenvolver um sistema distribuído, modular e reutilizável que permita:

1. Visualizar a evolução da popularidade de um nome ao longo das décadas.
2. Consultar os três nomes mais frequentes em uma localidade (UF).
3. Comparar a frequência de dois nomes nacionalmente.

---

## 🧱 Arquitetura SOA

Este sistema segue os princípios de **SOA** com os seguintes componentes:

| Camada        | Descrição |
|---------------|-----------|
| **Frontend (UI)** | Criado com React.js e Chart.js para fornecer uma interface amigável ao usuário, desacoplada dos serviços de dados. |
| **Serviço de Nome** | Responsável por consultar a API do IBGE com base em um nome informado. |
| **Serviço de Localidade** | Consulta os nomes mais populares de uma localidade específica. |
| **Serviço de Comparação** | Compara a evolução de dois nomes distintos nacionalmente. |
| **Integração via REST** | Os serviços se comunicam por meio de requisições HTTP RESTful (Axios). |

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React.js, Axios, Chart.js
- **Backend:** Node.js, Express.js, Axios
- **API Pública:** [IBGE - Nomes](https://servicodados.ibge.gov.br/api/docs/nomes)

---

## 🖥️ Funcionalidades

### 🔹 Evolução de um Nome
- Entrada: Nome próprio + intervalo de décadas
- Saída: Gráfico de linha com frequência ao longo do tempo

### 🔹 Top 3 Nomes por UF
- Entrada: Sigla da Unidade Federativa (ex: SP, RJ, BA)
- Saída: Tabela com os três nomes mais frequentes em cada década

### 🔹 Comparação entre Dois Nomes
- Entrada: Dois nomes diferentes
- Saída: Gráfico de linha comparando a popularidade dos dois

---

## 📂 Estrutura do Projeto

ARQ.26.05/
├── backend/
│ ├── index.js
│ ├── routes/apiRoutes.js
│ └── services/
│ ├── nomeService.js
│ ├── localidadeService.js
│ └── comparacaoService.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── NomeChart.js
│ │ │ ├── LocalidadeTable.js
│ │ │ └── ComparacaoChart.js
│ │ ├── pages/Home.js
│ │ ├── services/api.js
│ │ ├── App.js
│ │ └── index.js
└── README.md


---

## ⚙️ Como Executar Localmente

### 🔧 Backend

```bash
cd backend
npm install
node index.js

🌐 Frontend

cd frontend
npm install
npm start

🧾 Licença
Este projeto é de uso educacional e segue a licença MIT.

👥 Autores
Nome: Vlademir Vinhoto Junior

Curso: ENgenharia de Software
