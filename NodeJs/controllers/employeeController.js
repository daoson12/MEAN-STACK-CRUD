const express = require('express');
const router = express.Router();
const employee = require('../modeljs/employee');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    employee.find((err, doc) => {

        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2));
        }

    });

});
// Get employee by id Employees =>localhost:9000/employees/
router.get("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id : ${req.params.id} `);
    }
    employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log(
                "Error in Retrieving Employee: " + JSON.stringify(err, undefined, 2)
            );
        }
    });
});

// Edit employee by id Employees =>localhost:9000/employees/
router.put("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id : ${req.params.id} `);
    }

    let emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };

    employee.findByIdAndUpdate(req.params.id), { $set: emp }, { new: true },
        (err, doc) => {
            if (!err) {
                res.send(doc);
            } else {
                console.log(
                    "Error in Updating Employee: " + JSON.stringify(err, undefined, 2)
                );
            }
        };
});
// Delete employee by id Employees =>localhost:9000/employees/

router.delete("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with given id : ${req.params.id} `);
    }
    employee.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log(
                "Error in Deleting Employee: " + JSON.stringify(err, undefined, 2)
            );
        }
    });
});

router.post('/', (req, res) => {
    let emp = new employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in saving Employee:' + JSON.stringify(err, undefined, 2));
        }

    })
})
module.exports = router;