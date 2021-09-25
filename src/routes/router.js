const express = require('express')
const routes = express.Router()

// const {
//     mongoConnection,
//     LivroSchema
// } = require('./../database/db.js')


// routes.get('/', (req, res) => {

//     const findBooks = LivroSchema.find().then(books => {
//         res.render('list', {
//             books
//         })
//     })

// })


// routes.post('/create', (req, res) => {

//     if (req.body.title == "" || req.body.author == "" || req.body.title == undefined || req.body.author == undefined) {
//         return res.status(404).redirect('/')
//     }

//     const newBook = new LivroSchema({
//             title: req.body.title,
//             author: req.body.author
//         })
//         .save()
//         .then(() => {
//             res.status(202).redirect('/')
//         })
//         .catch(err => {
//             res.send("Erro ao guardar... " + err)
//         })
// })

// routes.get('/edit/:id', (req, res) => {

//     let findBook = LivroSchema.findById(req.params.id).then(book => {
//         res.render('edit', {
//             book
//         })
//     })

// })


// routes.post('/edit', async(req, res) => {

//     if (req.body.editetitle == "" || req.body.editeauthor == "" || req.body.editetitle == undefined || req.body.editeauthor == undefined) {
//         return res.status(404).redirect(`/edit/${req.body.editeid}`)
//     }

//     const findBook = await LivroSchema.findOne({
//             _id: req.body.editeid
//         })
//         .then(book => {
//             book.title = req.body.editetitle
//             book.author = req.body.editeauthor

//             book
//                 .save()
//                 .then(() => {
//                     console.log("Categoria Editada com sucesso!")
//                     res.status(2002).redirect('/')

//                 })
//                 .catch(err => {
//                     console.log("Falha ao editar categoria!")
//                 })
//         })
//         .catch(err => {
//             console.log("Erro: " + err)
//         })
// })


// routes.get('/remove/:id', (req, res) => {


//     const findB = LivroSchema.findByIdAndDelete(req.params.id)
//         .then(b => {
//             res.redirect('/')
//         })
//         .catch(err => {
//             console.log(err)
//         })


// })


routes.get('/', (req, res) => {
    return res.send("<h1>Hello word</h1>")
})


module.exports = routes