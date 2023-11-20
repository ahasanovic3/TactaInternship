const mongoose = require("mongoose");
const shoppersSchema= new mongoose.Schema({
    shopperAge:{
        type:Number,
        required:true
    },
    shopperName:{
        type:String,
        required:true
    },
    shopperSurname:{
        type: String,
        required:true
    }
},{
    timestamps:true,
});


const Shopper= mongoose.model("Shoppers",shoppersSchema);

module.exports=Shopper;