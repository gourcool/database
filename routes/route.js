var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
const path  = require('path');
var router = express.Router();
var app= express();

const Customer1 = require('../model');
app.use(bodyparser.json());

router.get('/:username/:password', function(req, res){
     Customer1.findOne({email:req.params.username}, function(err, user){
         if(err){
             console.log(err);
         }
         if(user){
             console.log("user already exists");
         }
         else{
             Customer1.findOne({password:req.params.password}, function(err, user1){
                 if(user1){
                     console.log("succesfull login");
                 }
             })
         }
     })
})

module.exports = router;