const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId

const getAll = async(req, res) => {
    //#swagger.tags=['Movies']
    try {
        const result = await mongodb.getDatabase().db().collection('movies').find()
        result.toArray().then((movies) => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(movies)
        })
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies', error });
    }

}

const getSingle = async(req, res) => {
    //#swagger.tags=['Movies']
    try {
        const moviesId = new ObjectId(req.params.id)
        const result = await mongodb.getDatabase().db().collection('movies').find({_id: moviesId})
        result.toArray().then((movies) => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(movies[0])
        })
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movie', error });
    }

}

const createMovie = async (req, res) => {
    //#swagger.tags=['Movies']
    try {
        const movie = {
            title: req.body.title,
            genre: req.body.genre,
            duration: req.body.duration,
            rating: req.body.rating,
            showtimes: {
                date: req.body.showtimes.date,
                time: req.body.showtimes.time,
                room: req.body.showtimes.room
            }
        }
        const response = await mongodb.getDatabase().db().collection('movies').insertOne(movie)
        if (response.acknowledged) {
            res.status(200).json({ message: 'Movie created successfully!', id: response.insertedId })
        }
    } catch (error){
        res.status(500).json({ message: 'Error creating movie', error });
    }
    
}

const updateMovie = async (req, res) => {
    //#swagger.tags=['Movies']
    try {
        const movieId = new ObjectId(req.params.id)
        const movie = {
            title: req.body.title,
            genre: req.body.genre,
            duration: req.body.duration,
            rating: req.body.rating,
            showtimes: {
                date: req.body.showtimes.date,
                time: req.body.showtimes.time,
                room: req.body.showtimes.room
            }
        }
    const response = await mongodb.getDatabase().db().collection('movies').replaceOne({_id: movieId}, movie)
    if (response.modifiedCount > 0) {
        res.status(200).json({ message: 'Movie updated successfully!' })
    } else {
        res.status(400).json({ message: 'Movie not found or no changes made!' })
    }
    } catch (error) {
        res.status(500).json({ message: 'Error updating movie', error });
    }
    
}

const deleteMovie = async(req, res) => {
    //#swagger.tags=['Movies']
    try {
        const movieId = new ObjectId(req.params.id)
    const response = await mongodb.getDatabase().db().collection(  'movies').deleteOne({_id: movieId})
    if (response.deletedCount > 0) {
        res.status(200).json({ message: 'Movie deleted successfully!' })
    } else {
        res.status(400).json({ message: 'Movie not found' })
    }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting movie', error })
    }
}

module.exports = {
    getAll,
    getSingle,
    createMovie,
    updateMovie,
    deleteMovie
}