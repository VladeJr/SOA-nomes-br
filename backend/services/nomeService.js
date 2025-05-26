const axios = require('axios');

const buscarEvolucaoNome = async (req, res) => {
  const { nome } = req.params;

  try {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`);
    const dados = response.data[0].res;

    res.json(dados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar evolução do nome' });
  }
};

module.exports = { buscarEvolucaoNome };
