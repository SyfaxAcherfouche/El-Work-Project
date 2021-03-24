const mongoose = require('mongoose');
const { Schema } = mongoose;

const freelanceSchema = new Schema({
        freelance_id: Schema.Types.ObjectId, 
        freelance_competences: [String],
        freelance_title: String,
        freelance_tarif: String,
        freelance_description: String, 
        user_id: {
                type: Schema.Types.ObjectId,
                ref: 'User'
        },
        category_id: [{
                type: Schema.Types.ObjectId,
                ref: 'Category'
        }]
});    

const Freelance = mongoose.model('Freelance', freelanceSchema);

module.exports = Freelance;