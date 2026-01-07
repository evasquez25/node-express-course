const express = require('express')
const router = express.Router()
const { getPeople, addPerson, findPerson } = require('../controllers/people')

// 'GET' ROUTES
router.get('/', (req, res) => {
    getPeople(req, res)
})

router.get('/:id', (req, res) => {
    findPerson(req, res)
})

// 'POST' ROUTES
router.post('/', (req, res) => {
    addPerson(req, res)
})

module.exports = router