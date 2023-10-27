const router = require('express').Router()

router.get("/" , (req,res) => {
    res.send("usuarios putos")
})

module.exports = router