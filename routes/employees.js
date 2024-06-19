const express = require('express');
const router = express.Router();
const { employeesValidation, validate } = require('../validation.js');
const employeeController = require('../controllers/employees.js');

// Get all employees
router.get('/', employeeController.getAll);

// Get only one employee
router.get('/:id', employeeController.getSingle);

// Add new employee
router.post('/', employeesValidation, validate, employeeController.createEmployee);

// Update one employee
router.put('/:id', employeesValidation, validate, employeeController.updateEmployee);

// Delete one employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;

