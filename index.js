const express = require("express");
const {log} = require("console");
const dotenv = require("dotenv")
const jobRouter = require("./router/job.js");
const { default: mongoose } = require("mongoose");

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    log("Connected to MongoDB with success!")
}).catch((err)=>{
    log("Connection failed miserabely: ",err)
});

const app = express();
app.use(express.json()); // for parsing application/json
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1", jobRouter);


// define port to run the server
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});