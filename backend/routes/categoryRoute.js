const categoryController = require('../controllers/categoryController')



function init(router) {
    router.route('/category').get(categoryController.getAllCategorys)
                            .post(categoryController.addCategory)
    router.route('/category/:id').get(categoryController.getCategory)
    router.route('/category/:id/update').put(categoryController.updateCategory)
    router.route('/category/:id/delete').delete(categoryController.deleteCategory)
}


module.exports.init = init