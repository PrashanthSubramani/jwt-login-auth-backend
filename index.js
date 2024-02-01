const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./database/dbconfig');
const authRoutes = require("./Routes/AuthRoutes")
const app = express();
const cookieParser = require("cookie-parser");
require('dotenv').config();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

app.listen(process.env.PORT,()=>{
    console.log('Server started in port ' + process.env.PORT)
});

connectToDatabase()

app.set("trust proxy", 1);

app.use(cors({
    origin:true,
    credentials : true,
})
);

app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);