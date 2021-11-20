import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from './routes/school-data.js';

const app = express()

mongoose.connect(
    `mongodb://localhost/MyUni`,
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
app.use('/school-data', router);


app.listen(8080, () => {
	console.log(`Server started on 8080`);
});


