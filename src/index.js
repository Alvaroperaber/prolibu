const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const helmet = require("helmet");
const routes = require('./Routes/api');

const app = express();
app.set('port', process.env.PORT || 9000)
app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to the API')
})
app.use('/api', routes)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})