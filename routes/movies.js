const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies.js')
const { moviesValidation, validate } = require('../validation.js') 
const { isAuthenticated } = require('../middleware/authenticate.js')

// Get all movies
router.get('/', movieController.getAll)

// Get only one movie
router.get('/:id', movieController.getSingle)

// Add new movie
router.post('/', isAuthenticated, moviesValidation, validate, movieController.createMovie)

// Update one movie
router.put('/:id', isAuthenticated, moviesValidation, validate, movieController.updateMovie)

// Delete one movie
router.delete('/:id', isAuthenticated, movieController.deleteMovie)

module.exports = router