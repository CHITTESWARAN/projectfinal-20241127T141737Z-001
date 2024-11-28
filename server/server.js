const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const productRoutes = require("./routes/productRoutes");

const app = express();


app.use(cors());
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, "uploads"))); 


mongoose.connect("mongodb://localhost:27017/yourDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));


app.use("/api/products", productRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to the backend API!");
});


app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});


app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
