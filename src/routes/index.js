const router = require('express').Router()

router.use("/asistencia" , require('./asistencia'))

router.use("/usuario", require('./usuario'))

module.exports= router