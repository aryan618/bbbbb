const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const port=process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());

app.get('/bhfl',(req,res)=>{
    res.status(200).json({"operation_code":1});
})

app.listen(port, () => {
    console.log("listening on port 3000");
  });