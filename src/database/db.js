const mongoose = require('mongoose');
const Schema = mongoose.Schema

const mongoConnection = mongoose.connect('mongodb://localhost/user')
    .then(() => {
        console.log("MongoDB rodando com sucesso!")
    })
    .catch(err => {
        console.log("Houve um erro na conexão com o MongoDB : " + err)
    })


const livroSchema = new Schema({
    title: {
        type: String,
        requere: true
    },
    author: {
        type: String,
        requere: true
    },

    createAt: {
        type: Date,
        default: Date.now
    }
})

const Livro = mongoose.model('livros', livroSchema)




module.exports = {
    mongoConnection,
    LivroSchema: Livro,
}