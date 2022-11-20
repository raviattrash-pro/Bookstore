const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-route");
const cors = require('cors');

const app = express();
//middleWares Routes
app.use(express.json());
app.use(cors());
app.use("/books", router);


/*app.use("/", (req, res, next) => { // main url call back function next is parameter inside it 
    res.send("This is Starting of your Project !!!!!");
})*/









mongoose.connect("mongodb+srv://admin:KoCBpEnqpz03rrnP@cluster0.wf6xhpc.mongodb.net/bookStore?retryWrites=true&w=majority")
    .then(() => console.log("You are Connect to the data base")) //promise
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));







//console.log("Hello!!!!!!!!!!!!!!!!Ravi");

//fd2b7RSfjQsspakp