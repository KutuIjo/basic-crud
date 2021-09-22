const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv/config');

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

//DB Connection
mongoose.connect(uri,{ useNewUrlParser: true})
    .catch(err => console.log(err));;

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established successfully");
});

//IMPORT ROUTES
const userRoute = require('./routes/user');

//MIDDLEWARES
app.use('/api/user', userRoute);

//ROUTES
app.get('/', (req,res) => {
  res.send('We are on home');
});

//Listener
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});