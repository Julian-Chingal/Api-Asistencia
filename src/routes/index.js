const router = require('express').Router()

router.use("/asistencia" , require('./assistant'))

router.use("/usuario", require('./user'))

module.exports= router