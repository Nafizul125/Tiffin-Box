const mongoose= require('mongoose');
var mongoURL='mongodb+srv://user:TOHA@tiffin-boxx.014guqq.mongodb.net/TIFFINBOXX'
mongoose.connect(mongoURL, {useNewUrlParser:true, useUnifiedTopology:true})
var db=mongoose.connection
db.on('connected', ()=>{
    console.log('Mongo DB Connection Successful:');
})
db.on('error', ()=>{
    console.log('Mongo DB Connection Failed:');
})
module.exports=mongoose