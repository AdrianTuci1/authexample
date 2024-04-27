require('dotenv').config();
const express = require('express');
const cors = require("cors");
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

//db connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("db connected"))
.catch(() => console.log("db not connected", err))

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/", require('./routes/authRoutes'));

const port = process.env.PORT || 8800
app.listen(port,() => console.log('listen on port'))
