const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create phone
exports.create = (req, res) => {
    Phone.create()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred"
        });
    });
};

// Get all phones
exports.findAll = (req, res) => {
    const id = req.params.id;
    
    Phone.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "An error has occurred"
        });
    }); 
};

// Get one phone by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Phone.findOne({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Task was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Task`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Task with id=" + id
        });
    });
};

// Update one phone by id
exports.update = (req, res) => {
    const id = req.params.id;

    Phone.update({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Task was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Task`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Task with id=" + id
        });
    });
};

// Delete one phone by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Phone.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Phone number was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete number`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Task with id=" + id
        });
    });
};
