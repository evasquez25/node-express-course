const express = require('express')
const router = express.Router()
const { getPeople, addPerson } = require('../controllers/people')

router.get('/', (req, res) => {
    getPeople(req, res)
})

router.post('/', (req, res) => {
    addPerson(req, res)
})

module.exports = router