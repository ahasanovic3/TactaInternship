const mongoose = require("mongoose");

import { MongoClient } from "mongodb";
const connectionString = process.env.mongo_url || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("ShoppingListDP");
export default db;

/*

mongoose.connect(process.env.mongo_url);
const shoppers=require("../models/shoppers")
const db = mongoose.connection;

mongoose.connection.on("connected", () => {
  console.log("MONGO DB uspjesno konektovan");
  shoppers.find({}).then((data)=>{console.log("data: ",data);})
    .catch(err => {
        console.error("Error:", err);
      });

});

mongoose.connection.on("error", (err) => {
  console.log("MONGO DB nije uspjesno konektovan");
});


module.exports = mongoose.connection;*/
