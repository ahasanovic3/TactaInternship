const mongoose = require("mongoose");
const connectionsSchema= new mongoose.Schema({
    shopperId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    shoppingItemId:{
        type:[mongoose.Types.ObjectId],
        required:true
    }
},{
    timestamps:true,
});

  
const connections= mongoose.model("connections",connectionsSchema);

module.exports=connections;