const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://root:root@cluster0.cbcyq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("success of connection");
}).catch((e)=>{
    console.log("no connection");
});