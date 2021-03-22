const mongoose = require('mongoose');
const { Schema } = mongoose;

const besoinCategorySchema = new Schema({
    besoinCategory_id: Number,
    besoin_id: {
        type: Schema.Types.ObjectId,
        ref: 'Besoin'
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});    

const BesoinCategory = mongoose.model('BesoinCategory', besoinCategorySchema);

module.exports = BesoinCategory;