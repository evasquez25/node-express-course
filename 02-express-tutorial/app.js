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
    res.json(product)
})

// Handle page not found
app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})