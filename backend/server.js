const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const todoRoutes = express.Router();
let Todo = require('./todo.model');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', {
    useNewUrlParser:true
});

const connection = mongoose.connection;
connection.once('open', function(){
    console.log('MDB connection established successfully');
});

app.listen(PORT, function(){
    console.log('Server running on port ' + PORT);
}
)