const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const router = require('./server/routes/router')

require('./server/database/connection');

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(bodyparser.urlencoded({ extended : true}))


//routes
app.use('/', router)

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});