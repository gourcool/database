const mongoose = require("mongoose");


const validator = require("validator");
const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    gender:{
        type:String
    },
    /* contact:{
        type:Number,
        requied:true,
        maxlength:10
    }, */
    date:{
        type:String
    },
    account:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
       /*  validate(value){
            if(validator.isEmail(value)){
                throw new Error("invlaid email")
            }
        } */
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type: String
    }

});

//we will create a new collection

const Customer = new mongoose.model("Customer", customerSchema);
module.exports = Customer;