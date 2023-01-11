module.exports = {
    async pagInicialGet(req, res){
    res.render('../views/index');
    },
    async pagAlunos(req, res){
        res.render('../views/alunos')
    },

    async pagSalas(req, res){
        res.render('../views/Salas')
    },

    async EditarAluno(req, res){
        res.render('../views/EditarAluno')
    },

}

