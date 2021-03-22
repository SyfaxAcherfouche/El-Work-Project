const User = require('../models/userModel');
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


cloudinary.config({
    cloud_name: 'dkxt4vhsu',
    api_key: '988773131665751',
    api_secret: 'GDuh9ZTwUFz5ZOd9zNgTF-7xn7A'
});


const register = (req, res) => {
    console.log(req.body.user_email)
    var errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.findOne({ user_email: req.body.user_email })
        .then(data => {
            if (data) {
                return res.status(401).json({ error: 'User already exist' })
            }
           /*  cloudinary.uploader.upload(req.file.path, (error, result) => { */
                bcrypt.genSalt(10, (err, salt, result) => {
                    bcrypt.hash(req.body.user_password, salt, (err, hash) => {
                        const user = new User({
                            user_email: req.body.user_email,
                            user_password: hash,
                            user_first_name: req.body.user_first_name,
                            user_last_name: req.body.user_last_name,
                            user_phone_number: req.body.user_phone_number,
                            user_adress: req.body.user_adress,
                            user_gender: req.body.user_gender,
                            /* user_img_url: result.url, */
                            freelance_id: req.body.freelance_id,
                            user_isFreelance: req.body.user_isFreelance,
                        })
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: "Handling POST requests to /register",
                                    createdUser: result
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    });
                });
            })
        /* }) */

}

const login = (req, res) => {
    User.findOne({ user_email: req.body.user_email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: "User doesnt exist" });
            }

            bcrypt.compare(req.body.user_password, user.user_password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: "Incorrect Password" });
                    }
                    res.status(200).json({
                        user_id: user.user_id,
                        token: jwt.sign(
                            { user_id: user.user_id },
                            'e369d8*044f56!8d26;9b&d²c611"4d746b(6e3da4e24689af2b2e.321c0850/7bf22dc5e$7ee1224:1a3b4a5;1d3d8?003ac768é75"9422e9c39c76dè3f06ç0càa)0d2=66_2908f48a0&8',
                            { expiresIn: '24h' }
                        ),
                        user: user
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}

const getAllUsers = (req, res) => {
    User.find()
        .populate('freelance_id')
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error }))
};

const getOneUser = (req, res) => {
    User.find({ _id: req.params.id })
        .populate('freelance_id')
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error }))
};

const updateUser = (req, res) => {
    User.findOne({ _id: req.params.id }, {
        'user_first_name': req.body.user_first_name,
        'user_last_name': req.body.user_last_name,
        'user_phone_number': req.body.user_phone_number,
        'user_adress': req.body.user_adress,
        'user_img_url': req.body.user_img_url,
        'user_isFreelance': req.body.user_isFreelance
    })
        .then(newUser => res.status(200).json(newUser))
        .catch(error => res.status(400).json(error))
}

const userController = {
    register,
    getAllUsers,
    getOneUser,
    login,
    updateUser
}

module.exports = userController;