const axios = require('axios');

const compararNomes = async (req, res) => {
  const { nome1, nome2 } = req.query;

  if (!nome1 || !nome2) {
    return res.status(400).json({ mensagem: 'Informe os dois nomes na query (nome1 e nome2)' });
  }

  try {
    const response1 = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome1}`);
    const response2 = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome2}`);

    const dadosNome1 = response1.data[0].res;
    const dadosNome2 = response2.data[0].res;

    res.json({
      nome1: { nome: nome1, dados: dadosNome1 },
      nome2: { nome: nome2, dados: dadosNome2 }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao comparar nomes' });
  }
};

module.exports = { compararNomes };
