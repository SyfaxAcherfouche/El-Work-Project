const besoinCategoryController = require('../controllers/besoinCategoryController')

const session = (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        next()
    } else {
        res.send('not connected !')
    }
}

function init(router) {
    router.route('/besoinCategory').get(besoinCategoryController.getAllBesoinCategorys)
                            .post(besoinCategoryController.addBesoinCategory)
    router.route('/besoinCategory/:id').get(session, besoinCategoryController.getBesoinCategory)
    router.route('/besoinCategory/:id/update').put(session, besoinCategoryController.updateBesoinCategory)
    router.route('/besoinCategory/:id/delete').delete(session, besoinCategoryController.deleteBesoinCategory)
}


module.exports.init = init