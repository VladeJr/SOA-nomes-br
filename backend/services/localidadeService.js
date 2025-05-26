const axios = require('axios');

const buscarTop3Nomes = async (req, res) => {
  const { uf } = req.params;

  try {
    const ufs = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const estado = ufs.data.find(e => e.sigla.toLowerCase() === uf.toLowerCase());

    if (!estado) {
      return res.status(404).json({ mensagem: 'UF não encontrada' });
    }

    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking?localidade=${estado.id}`);
    const top3 = response.data[0].res.slice(0, 3); // pega os 3 primeiros nomes por década

    res.json(top3);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar nomes por localidade' });
  }
};

module.exports = { buscarTop3Nomes };
