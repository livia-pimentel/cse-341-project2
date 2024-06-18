const express = require('express')
const router = express.Router()

const movieController = require('../controllers/movies.js')

router.get('/', movieController.getAll)

router.get('/:id', movieController.getSingle)

router.post('/', movieController.createMovie)

router.put('/:id', movieController.updateMovie)

router.delete('/:id', movieController.deleteMovie)

module.exports = router