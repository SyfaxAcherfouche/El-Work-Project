const BesoinCategory = require('../models/besoinCategoryModel');
const { validationResult } = require('express-validator')

const addBesoinCategory = (req, res) => {
    var errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const besoinCategory = new  BesoinCategory({
        besoin_id: req.body.besoin_id,
        category_id: req.body.category_id
    });
    besoinCategory
        .save()
        .then(result => {
            res.status(201).json({
                message: "Handling POST requests to /besoinCategory",
                createdBesoinCategory: result
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

const getAllBesoinCategorys = (req, res) => {
    BesoinCategory.find()
            .populate('besoin_id')
            .populate('category_id').exec()
            .then(besoinCategory => res.json(besoinCategory))
            .catch(error => res.status(400).json({error}))
};

const getBesoinCategory = (req, res) => {
    BesoinCategory.findById(req.params.id)
        .populate('besoin_id')
        .populate('category_id').exec()
        .then((BesoinCategory) => {
            if (!BesoinCategory) {
                return res.status(404).json({
                    message: 'BesoinCategory not found with this id ' + req.params.id,
                });
            }
            res.status(200).json(BesoinCategory);
            console.log(BesoinCategory);
        })
        .catch((err) => {
            return res.status(500).json({
                message: 'Error retrieving besoinCategory with id ' + req.params.id,
                error: err
            });
        });
}

const updateBesoinCategory = (req, res) => {
    BesoinCategory.findByIdAndUpdate({_id : req.params.id}, {'besoin_id': req.body.besoin_id, 'category_id': req.body.category_id })
        .then(newBesoinCategory => res.status(200).json(newBesoinCategory))
        .catch(error => res.status(400).json(error)) 
}

const deleteBesoinCategory = (req, res) => {

    BesoinCategory.findByIdAndRemove(req.params.id)
        .then(deleteBesoinCategory => res.status(200).json(deleteBesoinCategory))
        .catch(error => res.status(400).json(error)) 
}

const besoinCategoryController = {
    addBesoinCategory,
    getAllBesoinCategorys,
    getBesoinCategory,
    updateBesoinCategory,
    deleteBesoinCategory
}

module.exports = besoinCategoryController;