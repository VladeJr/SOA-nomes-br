const express = require('express');
const router = express.Router();
const nomeService = require('../services/nomeService');
const localidadeService = require('../services/localidadeService');
const comparacaoService = require('../services/comparacaoService');

router.get('/nome/:nome', nomeService.buscarEvolucaoNome);
router.get('/localidade/:uf', localidadeService.buscarTop3Nomes);
router.get('/comparacao', comparacaoService.compararNomes);

module.exports = router;
