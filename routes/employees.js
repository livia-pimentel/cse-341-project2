const express = require('express')
const router = express.Router()

const employeeController = require('../controllers/employees.js')

router.get('/', employeeController.getAll);
router.get('/:id', employeeController.getSingle);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router
