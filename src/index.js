import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express()

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/MyUni',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('Search.htm');
});

app.listen(8080, () => {
	console.log(`Server started on 8080`);
});


