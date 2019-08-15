const express = require('express');
const mongoose = require('mongoose');

const mongoDb_url = require('./config/config').MONGODB_URL;
const port = require('./config/config').PORT; 

const app = express();

const routes = require('./routes/routes');

mongoose.connect(mongoDb_url , { 
    useNewUrlParser  : true
})

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server UP ${port}`)
});