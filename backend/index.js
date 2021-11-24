import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from './routes'
import path from "path";

const app = express()

mongoose.connect(
    'mongodb://localhost:27017/MyUni',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("DB connected!");
      } else {
        console.error(err);
      }
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
app.use(express.static(path.join('public')));


app.listen(3000, () => {
	console.log(`Server started on 3000`);
});


