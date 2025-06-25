const tarefaServices = require('../services/tarefaServices');

async function listarTarefas(req, res) {
    try {
        const tarefas = await tarefaServices.listarQuery();
                res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tarefas', error });
    }
}
module.exports = { listarTarefas };