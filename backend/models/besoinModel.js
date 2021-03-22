const mongoose = require('mongoose');
const { Schema } = mongoose;

const besoinSchema = new Schema({
        besoin_id: Schema.Types.ObjectId, 
        besoin_title: String,
        besoin_description: String,
        besoin_budget: String,
        besoin_deadline: String,
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'  
        }
});    


const Besoin = mongoose.model('Besoin', besoinSchema);

module.exports = Besoin;