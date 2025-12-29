console.log('Express Tutorial')

const express = require('express')
const { products } = require('./data')
const app = express()

// Middleware
app.use(express.static('./public'))

// Routes 
app.get('/api/v1/test', (req, res) => {
    res.json({ message: 'It worked!' })
})

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

app.get('/api/v1/query', (req, res) => {
    if (req.query.search) {
        const filteredProducts = products.filter((p) => p.name.toLowerCase().startsWith(req.query.search))
        if (filteredProducts.length === 0) {
            return res.status(404).json({ message: 'No products found' })
        }

        if (req.query.limit) {
            return res.json(filteredProducts.slice(0, req.query.limit))
        }
        res.json(filteredProducts)
    } else {
        if (req.query.limit) {
            return res.json(products.slice(0, req.query.limit))
        }
        res.json(products)
    }
})

// Handle page not found
app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})