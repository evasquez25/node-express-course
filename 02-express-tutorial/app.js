console.log('Express Tutorial')

const express = require('express')
const { products, people } = require('./data')
const app = express()

// MIDDLEWARE
const logger = (req, res, next) => {
    console.log(req.method, req.url, Date.now())
    next()
}
app.use(logger)

app.use(express.static('./methods-public'))

// body parsers
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// GET ROUTES
// app.get('/api/v1/test', (req, res) => {
//     res.json({ message: 'It worked!' })
// })

app.get('/api/v1/products', (req, res) => {
    res.json(products)
})

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID)
    const product = products.find((p) => p.id === idToFind)
    if (!product) {
        return res.status(404).json({ message: 'That product was not found.' })
    }
    res.json(product)
})

app.get('/api/v1/people', (req, res) => {
    res.json(people)
})

app.get('/api/v1/query', (req, res) => {
    let filteredProducts = [...products]

    if (req.query.search) {
        filteredProducts = filteredProducts.filter((p) => p.name.toLowerCase().startsWith(req.query.search))
    }

    if (req.query.leq) {
        filteredProducts = filteredProducts.filter((p) => p.price <= req.query.leq)
    }

    if (filteredProducts.length === 0) {
        return res.status(404).json({ message: 'No products found' })
    }

    if (req.query.limit) {
        return res.json(filteredProducts.slice(0, req.query.limit))
    }
    res.json(filteredProducts)
})

// POST ROUTES
app.post('/api/v1/people', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ success: false, message: 'Please provide a name' })
    }

    people.push({
        id: people.length + 1,
        name: req.body.name
    })
    res.status(201).json({ success: true, name: req.body.name })
})

// Handle page not found
app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})