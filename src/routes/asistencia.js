const router = require('express').Router()

router.post("/" , (req,res) => {
    res.send("Usuario Registrado")
})

router.get("/" , (req,res) => {
    res.send("Usuario Registrado")
})

module.exports = router