const express = require('express')
const routes = express.Router() // imagine this was here

routes.get('/urls', (req, res) => {
    // some stuff

    res.send('All urls')
})

routes.get('/urls/:id', (req, res) => {
    // some stuff

    res.send('one url')
})

routes.get('/urls/:id/statistics', (req, res) => {
    // some stuff

    res.send('Stats')
})

module.exports = routes