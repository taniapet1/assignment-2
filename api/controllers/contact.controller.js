const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => { => {
    Contact.create()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred"
        });
    });
};


// Get all contacts   Lab8 task controller.js
exports.findAll = (req, res) => {
    Contacts.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred"
        });
    }); 
};


// Get one contact by id
exports.findOne = (req, res) => {
    Contacts.findOne()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred"
        });
    });
};

  
};

// Update one contact by id
exports.update = (req, res) => {
    const id = req.params.id;

    Contacts.update(req.body, {
         where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Task was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Task`
            });
        }
    })
    .catch(err => {
       res.status(500).send({
           message: "Error updating Task with id=" + id
       });
    }); 
};

// Delete one contact by id
exports.delete = (req, res) => {
    Contacts.delete()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred"
        });
    });
};