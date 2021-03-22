const Offre = require('../models/offreModel');
const { validationResult } = require('express-validator')

const addOffre = (req, res) => {
    var errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const offre = new  Offre({
        offre_cover_letter: req.body.offre_cover_letter,
        offre_price: req.body.offre_price,
        offre_deadline: req.body.offre_deadline,
        besoin_id: req.body.besoin_id,
        freelance_id: req.body.freelance_id
    });
    offre
        .save()
        .then(result => {
            res.status(201).json({
                message: "Handling POST requests to /offre",
                createdOffre: result
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

const getAllOffres = (req, res) => {
    Offre.find()
            .populate('besoin_id')
            .populate('freelance_id').exec()
            .then(offre => res.json(offre))
            .catch(error => res.status(400).json({error}))
};

const getOffre = (req, res) => {
    Offre.findById(req.params.id)
        .populate('client_id').exec()
        .then((Offre) => {
            if (!Offre) {
                return res.status(404).json({
                    message: 'Offre not found with this id ' + req.params.id,
                });
            }
            res.status(200).json(Offre);
            console.log(Offre);
        })
        .catch((err) => {
            return res.status(500).json({
                message: 'Error retrieving offre with id ' + req.params.id,
                error: err
            });
        });
}

const updateOffre = (req, res) => {
    Offre.findByIdAndUpdate({_id : req.params.id}, {"offre_cover_letter": req.body.offre_cover_letter, "offre_price": req.body.offre_price, "offre_deadline": req.body.offre_deadline})
        .then(newOffre => res.status(200).json(newOffre))
        .catch(error => res.status(400).json(error)) 
}

const deleteOffre = (req, res) => {

    Offre.findByIdAndRemove(req.params.id)
        .then(deleteOffre => res.status(200).json(deleteOffre))
        .catch(error => res.status(400).json(error)) 
}

const offreController = {
    addOffre,
    getAllOffres,
    getOffre,
    updateOffre,
    deleteOffre
}

module.exports = offreController;