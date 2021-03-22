const freelanceCategoryController = require('../controllers/freelanceCategoryController')

const session = (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        next()
    } else {
        res.send('not connected !')
    }
}

function init(router) {
    router.route('/freelanceCategory').get(freelanceCategoryController.getAllFreelanceCategorys)
                            .post(freelanceCategoryController.addFreelanceCategory)
    router.route('/freelanceCategory/:id').get(session, freelanceCategoryController.getFreelanceCategory)
    router.route('/freelanceCategory/:id/update').put(session, freelanceCategoryController.updateFreelanceCategory)
    router.route('/freelanceCategory/:id/delete').delete(session, freelanceCategoryController.deleteFreelanceCategory)
}


module.exports.init = init