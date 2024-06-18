const router = require('express').Router()

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    //#swagger.tags=['Project 2 - CSE 341: Web Services']
    res.send('Project 2 - CSE 341: Web Services')
})

router.use('/employees', require('./employees'))
router.use('/movies', require('./movies'))

module.exports = router