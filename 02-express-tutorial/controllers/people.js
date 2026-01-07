const { people } = require('../data')

const addPerson = (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ success: false, message: 'Please provide a name' })
    }

    people.push({
        id: people.length + 1,
        name: req.body.name
    })
    res.status(201).json({ success: true, name: req.body.name })
}

const getPeople = (req, res) => {
    res.json(people)
}

const findPerson = (req, res) => {
    const idToFind = parseInt(req.params.id)
    const person = people.find((p) => p.id === idToFind)
    if (!person) {
        return res.status(404).json({ success: false, message: 'Person not found' })
    }
    res.status(200).json(person)
}

module.exports = {
    addPerson,
    getPeople,
    findPerson
}