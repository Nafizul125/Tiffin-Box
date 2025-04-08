const express = require("express");
const app = express();
const food=require("./models/foodmodel.js");

const db= require("./db.js");





app.use(express.json());


app.get("/", (req, res) => {
    res.send("API Running" + port);
});
app.get("/getfood", async (req, res) => {
    try {
        const docs = await food.find({});
        res.send(docs); // Send the list of food items
    } catch (err) {
        console.error("Error fetching food items:", err);
        res.status(500).send("Something went wrong while retrieving food data.");
    }
});


    

const port =process.env.Port || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));