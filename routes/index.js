const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./reactionRoutes.js'))
router.use('/api', require('./thoughtRoutes.js'))

module.exports = router