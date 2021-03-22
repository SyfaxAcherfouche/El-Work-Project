const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    category_id: Schema.Types.ObjectId,
    category_title: String
});    

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

