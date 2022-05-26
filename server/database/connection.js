const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/crud', 
    { useNewUrlParser: true,
        useUnifiedTopology: true   
           }).then(() => console.log("Database is connected successfully..."))
             .catch(err => console.log(err));