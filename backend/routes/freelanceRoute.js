const freelanceController = require('../controllers/freelanceController')


function init(router) {
    router.route('/freelance').get(freelanceController.getAllFreelance)
                            .post(freelanceController.addFreelance)
    router.route('/freelance/:id').get(freelanceController.getFreelance)
    router.route('/freelance/:id/update').put(freelanceController.updateFreelance)
    router.route('/freelance/:id/delete').delete(freelanceController.deleteFreelance)
}


module.exports.init = init