const express = require("express")
const router = express.Router()

router.get('/', (req,res) => {
    res.renderf("index")
})

module.exports = router