const mongoose= require('mongoose');
const foodSchema= mongoose.Schema({
    name:{type:String, require},
    varients:[],
    prices:[],
    image:{type:String, require},
    category:{type:String, require},
    description:{type:String, require}
},{
    timestamps:true
})

const foodmodel= mongoose.model('fooditems', foodSchema)
module.exports= foodmodel