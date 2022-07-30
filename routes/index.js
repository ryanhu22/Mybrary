const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

// Export this router
module.exports = router