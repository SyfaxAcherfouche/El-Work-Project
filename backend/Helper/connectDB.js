const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('useFindAndModify', false);

const connectDB = () => {
    mongoose.connect(
        process.env.MONGO_CONNECT,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },
        (err) => {
            if (err) {
                console.log(err);
            } else console.log("database connected");
        }
    );
};

module.exports = connectDB;