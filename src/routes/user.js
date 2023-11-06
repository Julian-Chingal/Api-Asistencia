const router = require('express').Router()
const {controllUser} = require('../controller')

router.get("/" , controllUser.getUsers)

router.get("/:id" , controllUser.getIdUsers)

router.post("/registro" , controllUser.postUser)

router.put("/:id" , controllUser.putUser)

router.delete("/:id" , controllUser.deleteUser)

module.exports = router