const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./database/dbconfig');
const authRoutes = require("./Routes/AuthRoutes")
const app = express();
const cookieParser = require("cookie-parser");
require('dotenv').config();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.engine('html', require('ejs').renderFile); 
app.set('views', '/opt/render/project/src/views'); 

app.listen(process.env.PORT,()=>{
    console.log('Server started in port ' + process.env.PORT)
});

connectToDatabase()


app.use(cors({
    origin:['https://stellar-torrone-cee7e7.netlify.app'],
    credentials : true,
})
);


app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);