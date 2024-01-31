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


// app.use(cors({
//     origin:['https://stellar-torrone-cee7e7.netlify.app/'],
//     method:["GET", "POST"],
//     credentials : true,
// })
// );

app.use(cors());


app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);