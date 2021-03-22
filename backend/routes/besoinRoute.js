const besoinController = require('../controllers/besoinController')
const { body } = require('express-validator');

const session = (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        next()
    } else {
        res.send('not connected !')
    }
}

function init(router) {
    router.route('/besoin').get(besoinController.getAllBesoins)
                            .post([body('besoin_budget').isNumeric(),besoinController.addBesoin])
    router.route('/besoin/:id').get(session, besoinController.getBesoin)
    router.route('/besoin/:id/update').put(session, besoinController.updateBesoin)
    router.route('/besoin/:id/delete').delete( besoinController.deleteBesoin)
}


module.exports.init = init