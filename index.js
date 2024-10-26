const config = require("./utils/config");
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb://localhost:27017/mydatabase")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(10000, () => {
      console.log(`Server running on 10000`);
    });
  })
  .catch((error) => {
    console.log("mongodb+srv://Dharshni:Dharshni@19@cluster0.jzr8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.error("Error Connecting to MongoDB", error);
  });
