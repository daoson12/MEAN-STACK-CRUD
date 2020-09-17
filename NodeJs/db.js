const mongoose = require('mongoose');

const db = "mongodb://localhost:27017/CrudDB"

mongoose.connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true

    },
    err => {
        if (err) {
            console.error('Error!' + err)
        } else {
            console.log('Connected to Mongodb')
        }
    })
module.exports = mongoose