const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId

const getAll = async(req, res) => {
    //#swagger.tags=['Employees']
    try {
        const result = await mongodb.getDatabase().db().collection('employees').find()
        result.toArray().then((employees) => {
            res.setHeader('Content-Type', 'application/json')
            res.status(204).json(employees)
        })
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }

}

const getSingle = async(req, res) => {
    //#swagger.tags=['Employees']
    try {
        const employeesId = new ObjectId(req.params.id)
        const result = await mongodb.getDatabase().db().collection('employees').findOne({_id: employeesId})
        // result.toArray().then((employees) => {
        //     res.setHeader('Content-Type', 'application/json')
        //     res.status(204).json(employees[0])
        // })
        if (result) {
            res.setHeader('Content-Type', 'application/json');
            res.status(204).json(result);
        } else {
            console.log('Employee not found for ID:', employeesId)
            res.status(400).json({ message: 'Employee not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employee', error });
    }

}

const createEmployee = async (req, res) => {
    //#swagger.tags=['Employees']
    try {
        const employee = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateBirth: req.body.dateBirth,
            email: req.body.email,
            hireDate: req.body.hireDate,
            workHours: {
                start: req.body.workHours.start,
                end: req.body.workHours.end   
            },
            role: req.body.role
        }
        const response = await mongodb.getDatabase().db().collection('employees').insertOne(employee)
        if (response.acknowledged) {
            res.status(204).json({ message: 'Employee created successfully!', id: response.insertedId })
        }
    } catch (error){
        res.status(500).json({ message: 'Error creating employee', error });
    }
    
}

const updateEmployee = async (req, res) => {
    //#swagger.tags=['Employees']
    try {
        const employeeId = new ObjectId(req.params.id)
    const employee = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateBirth: req.body.dateBirth,
        email: req.body.email,
        hireDate: req.body.hireDate,
        workHours: {
            start: req.body.workHours.start,
            end: req.body.workHours.end   
        },
        role: req.body.role
    }
    const response = await mongodb.getDatabase().db().collection('employees').replaceOne({_id: employeeId}, employee)
    if (response.modifiedCount > 0) {
        res.status(204).json({ message: 'Employee updated successfully!' })
    } else {
        res.status(400).json({ message: 'Employee not found or no changes made!' })
    }
    } catch (error) {
        res.status(500).json({ message: 'Error updating employee', error });
    }
    
}

const deleteEmployee = async(req, res) => {
    //#swagger.tags=['Employees']
    try {
        const employeeId = new ObjectId(req.params.id)
    const response = await mongodb.getDatabase().db().collection('employees').deleteOne({_id: employeeId})
    if (response.deletedCount > 0) {
        res.status(204).json({ message: 'Employee deleted successfully!' })
    } else {
        res.status(400).json({ message: 'Employee not found' })
    }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting employee', error })
    }
}

module.exports = {
    getAll,
    getSingle,
    createEmployee,
    updateEmployee,
    deleteEmployee
}