const Category = require('../models/categoryModel');
const { validationResult } = require('express-validator')

const addCategory = (req, res) => {
    var errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const category = new  Category({
        category_id: req.body.category_id,
        category_title: req.body.category_title
    });
    category  
        .save()
        .then(result => {
            res.status(201).json({
                message: "Handling POST requests to /category",
                createdCategory: result
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

const getAllCategorys = (req, res) => {
    Category.find()
            .then(category => res.json(category))
            .catch(error => res.status(400).json({error}))
};

const getCategory = (req, res) => {
    Category.findById(req.params.id)
        .then((Category) => {
            if (!Category) {
                return res.status(404).json({
                    message: 'Category not found with this id ' + req.params.id,
                });
            }
            res.status(200).json(Category);
            console.log(Category);
        })
        .catch((err) => {
            return res.status(500).json({
                message: 'Error retrieving category with id ' + req.params.id,
                error: err
            });
        });
}

const updateCategory = (req, res) => {
    Category.findByIdAndUpdate({_id : req.params.id}, {'category_title': req.body.category_title })
        .then(newCategory => res.status(200).json(newCategory))
        .catch(error => res.status(400).json(error)) 
}

const deleteCategory = (req, res) => {

    Category.findByIdAndRemove(req.params.id)
        .then(deleteCategory => res.status(200).json(deleteCategory))
        .catch(error => res.status(400).json(error)) 
}

const categoryController = {
    addCategory,
    getAllCategorys,
    getCategory,
    updateCategory,
    deleteCategory
}

module.exports = categoryController;