const Besoin = require('../models/besoinModel');
const { validationResult } = require('express-validator')

const addBesoin = (req, res) => {
    var errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const besoin = new  Besoin({
        besoin_title: req.body.besoin_title,
        besoin_description: req.body.besoin_description,
        besoin_budget: req.body.besoin_budget,
        besoin_deadline: req.body.besoin_deadline,
        client_id: req.body.client_id
    });
    besoin
        .save()
        .then(result => {
            res.status(201).json({
                message: "Handling POST requests to /besoin",
                createdBesoin: result
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

const getAllBesoins = (req, res) => {
    Besoin.find()
            .populate('client_id').exec()
            .then(besoin => res.json(besoin))
            .catch(error => res.status(400).json({error}))
};

const getBesoin = (req, res) => {
    Besoin.findById(req.params.id)
        .populate('client_id').exec()
        .then((Besoin) => {
            if (!Besoin) {
                return res.status(404).json({
                    message: 'Besoin not found with this id ' + req.params.id,
                });
            }
            res.status(200).json(Besoin);
            console.log(Besoin);
        })
        .catch((err) => {
            return res.status(500).json({
                message: 'Error retrieving besoin with id ' + req.params.id,
                error: err
            });
        });
}

const updateBesoin = (req, res) => {
    Besoin.findByIdAndUpdate({_id : req.params.id}, {'besoin_title': req.body.besoin_title, 'besoin_description': req.body.besoin_description, 'besoin_budget': req.body.besoin_budget ,'besoin_deadline': req.body.besoin_deadline})
        .then(newBesoin => res.status(200).json(newBesoin))
        .catch(error => res.status(400).json(error)) 
}

const deleteBesoin = (req, res) => {

    Besoin.findByIdAndRemove(req.params.id)
        .then(deleteBesoin => res.status(200).json(deleteBesoin))
        .catch(error => res.status(400).json(error)) 
}

const besoinController = {
    addBesoin,
    getAllBesoins,
    getBesoin,
    updateBesoin,
    deleteBesoin
}

module.exports = besoinController;