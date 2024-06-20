
const { check, validationResult } = require('express-validator')

// Employees validations
exports.employeesValidation = [
    check('firstName', 'First name is required.').not().isEmpty(),
    check('lastName', 'Last name is required.').not().isEmpty(),
    check('dateBirth', 'Date of birth is required.').not().isEmpty(),
    check('email', 'Please include a valid email.').isEmail().normalizeEmail({ gmail_remove_dots: true}),
    check('hireDate', 'Hire date is required.').not().isEmpty(),
    check('workHours.start', 'Start time of work is required.').not().isEmpty(),
    check('workHours.end', 'End time of work is required').not().isEmpty(),
    check('role', 'Role is required.').not().isEmpty()
]

// Movies validations
exports.moviesValidation = [
    check('title', 'Title is required.').not().isEmpty(),
    check('genre', 'Genre is required.').not().isEmpty(),
    check('duration', 'Duration is required.').not().isEmpty(),
    check('rating', 'Rating is required.').isDecimal(),
    check('showtimes.date', 'Date is required.').not().isEmpty(),
    check('showtimes.time', 'Time is required.').not().isEmpty(),
    check('showtimes.room', 'Room is required.').isInt(),
]

// // Signup validations
// exports.signupValidation = [
//     check('name', 'Name is requied').not().isEmpty(),
//     check('email', 'Please include a valid email').isEmail().normalizeEmail({gmail_remove_dots: true}),
//     check('password', 'Password must be 6 or more characters').isLength({min: 6})
// ]

// // Login validations
// exports.loginValidation = [
//     check('email', 'Please include a valid email.').isEmail().normalizeEmail({  gmail_remove_dots: true}),
//     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
// ]

// Middleware to handle validation results
exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    next()
}