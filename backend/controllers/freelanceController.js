const Freelance = require('../models/freelanceModel');
const { validationResult } = require('express-validator');
const User = require('../models/userModel');

const addFreelance = (req, res) => {
    var errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const freelance = new  Freelance({
        freelance_competences: req.body.freelance_competences,
        freelance_title: req.body.freelance_title,
        freelance_tarif: req.body.freelance_tarif,
        freelance_description: req.body.freelance_description, 
        user_id: req.body.user_id,
        category_id: req.body.category_id
    });
    freelance
        .save()
        .then(result => {
            User.findByIdAndUpdate(result.user_id,{user_isFreelance: true, freelance_id:result._id}).then(() => {
                res.status(201).json({
                  message: "Handling POST requests to /freelance",
                  createdFreelance: result,
                });
            }).catch(err => res.status(500).json({
                error: err
            }))
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

const getAllFreelance = (req, res) => {
    Freelance.find()
            .populate('user_id')
            .populate('category_id').exec()
            .then(freelance => res.json(freelance))
            .catch(error => res.status(400).json({error}))
};

const getFreelance = (req, res) => {
    Freelance.findById(req.params.id)
        .populate('user_id')
        .populate('category_id').exec()
		.then((Freelance) => {
			if (!Freelance) {
				return res.status(404).json({
					message: 'Freelance not found with this id ' + req.params.id,
				});
			}
			res.status(200).json(Freelance);
			console.log(Freelance);
		})
		.catch((err) => {
			return res.status(500).json({
                message: 'Error retrieving freelance with id ' + req.params.id,
                error: err
			});
		});
}

const updateFreelance = (req, res) => {
    Freelance.findByIdAndUpdate({_id : req.params.id}, {'freelance_competences': req.body.freelance_competences, 'freelance_title': req.body.freelance_title, 'freelance_tarif': req.body.freelance_tarif, 'freelance_description': req.body.freelance_description })
        .then(newFreelance => res.status(200).json(newFreelance))
        .catch(error => res.status(400).json(error)) 
}

const deleteFreelance = (req, res) => {
    Freelance.findByIdAndRemove(req.params.id)
        .then(deleteFreelance => res.status(200).json(deleteFreelance))
        .catch(error => res.status(400).json(error)) 
}

const freelanceController = {
    addFreelance,
    getAllFreelance,
    getFreelance,
    updateFreelance,
    deleteFreelance
}

module.exports = freelanceController;