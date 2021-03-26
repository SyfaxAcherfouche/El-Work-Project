const userController = require('../controllers/userController')
const { body } = require('express-validator');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')
function init(router) {
    router.route('/register').post([multer, body('user_email').isEmail(), body('user_password').isLength({ min: 6 }), userController.register])
    router.route('/login').post(userController.login)
    router.route('/users').get(userController.getAllUsers)
    router.route('/users/:id').get(auth, userController.getOneUser)
    router.route('/users/:id/update').put( userController.updateUser)
}

module.exports.init = init
