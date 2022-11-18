const express = require('express')
const router = express.Router()

// All Authors route
router.get('/', (req, res) => {
    res.render('a/index')
})

// New author route
router.get('/new', (req, res) => {
    res.render('a/new')
})

// Create Author Route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router