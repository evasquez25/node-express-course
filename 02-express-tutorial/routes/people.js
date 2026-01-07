const express = require('express')
const router = express.Router()
const { getPeople, addPerson, findPerson, updatePerson, deletePerson } = require('../controllers/people')

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

// 'PUT' ROUTES
router.put('/:id', (req, res) => {
    updatePerson(req, res)
})

// 'DELETE' ROUTES
router.delete('/:id', (req, res) => {
    deletePerson(req, res)
})

module.exports = router