const router = require('express').Router()
const {controllUser} = require('../controller')

router.get("/" , controllUser.getUsers)

router.get("/:id" , controllUser.getIdUsers)

router.post("/registro" , controllUser.user_register)

router.put("/:id" , (req,res) => {
    res.send("usuarios putos")
})

router.delete("/:id" , (req,res) => {
    res.send("usuarios putos")
})

module.exports = router