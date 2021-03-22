const offreController = require('../controllers/offreController')
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
    router.route('/offre').get(offreController.getAllOffres)
                            .post([body('offre_price').isNumeric(),offreController.addOffre])
    router.route('/offre/:id').get(session, offreController.getOffre)
    router.route('/offre/:id/update').put(session, offreController.updateOffre)
    router.route('/offre/:id/delete').delete(session, offreController.deleteOffre)
}


module.exports.init = init