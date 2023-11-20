const mongoose = require("mongoose");
const shoppingItemSchem= new mongoose.Schema({
    ItemLocation:{
        type:String,
        required:true
    },
    ItemName:{
        type:String,
        required:true
    },
    ItemPrice:{
        type: String,
        required:true
    },
    Counter:{
        type: Number,
        default: 0
    }
},{
    timestamps:true,
});


const ShoppingItem= mongoose.model("shoppingItems",shoppingItemSchem);

module.exports=ShoppingItem;

