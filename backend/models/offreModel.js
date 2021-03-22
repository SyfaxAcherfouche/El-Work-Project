const mongoose = require('mongoose');
const { Schema } = mongoose;

const offreSchema = new Schema({
    offre_id: Schema.Types.ObjectId, 
    offre_cover_letter: String,
    offre_price: String,
    offre_deadline: String,
    besoin_id: {
        type: Schema.Types.ObjectId,
        ref: 'Besoin'
    },
    freelance_id: {
        type: Schema.Types.ObjectId,
        ref: 'Freelance'
    }
});    


const Offre = mongoose.model('Offre', offreSchema);

module.exports = Offre;