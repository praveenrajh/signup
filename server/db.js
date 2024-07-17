const { model } = require('mongoose');
const mongoose = require('mongoose');

module.exports = () => {
    // const connectionParams = {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // };
    try {
        mongoose.connect(process.env.DB);
        console.log("Connected to Database Successfully")
    } catch (error) {
        console.log(error);
        console.log("could not connect to dataabase");
    }
}