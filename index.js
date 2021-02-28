const express = require("express");
const bodyparser = require('body-parser');
const app = express();
const path = require('path');
require("./db");
const Customer = require("./model");
var routes = require('./routes/route');


app.use(bodyparser.urlencoded({extended:true}));
app.use('/', routes);

//Main Sign Up Page
/* app.get("/",(req, res)=>{
    res.sendFile(__dirname + '/index.html');
     const mob = req.body.contact;
    console.log(req.body.contact);
     Customer.exists({phone:mob}, function(err, res){
         if(err){
             console.log(err);
         }
         else{ 
             console.log(res);
             console.log(typeof(res));
         }
     })
});  

 */ 
//Here if all the fields are true then sign up is successfull
app.post('/quotes', (req,res)=>{

     Customer.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log(err);
        }
        if(user){
            console.log("user already exista");
        }
        else{
            console.log("user not exists");
 
            const user = new Customer({
                name: req.body.name,
                gender:req.body.gender,
                phone:req.body.contact,
                date: req.body.date,
                account: req.body.account,
                address: req.body.address,
                email: req.body.email,
                password: req.body.pwd
            });
        
           user.save();
           console.log("suucessfull entry");
           return res.sendFile(__dirname + '/login.html');
        }
    })
    
    
    console.log(req.body);
})


//If username and password exists in database then sucessfull login

app.post('/login', (req, res)=>{
    Customer.findOne({email:req.body.username}, function(err, res){
        if(err){
            console.log(err);
        }
        if(res){
            Customer.findOne({password:req.body.l_pwd}, (err , result)=>{
                if(err){
                    console.log(err);
                }
                if(result){
                   // return res.sendFile(__dirname + "/dashboard.html");
                   //console.log('successfull login');
                   alert("Welcome to our website");
                }
                else{
                    console.log("Invalid Password");
                }
            })
        }
        else{
            console.log("Wrong Username");
        }
    })
})

app.listen(3001, function(){
    console.log('listenon on 3000');
})