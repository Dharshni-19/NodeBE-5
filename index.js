const config = require("./utils/config");
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb+srv://Dharshni:Dharshni@19@cluster0.jzr8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(config.PORT, () => {
      console.log(`Server running on ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.log(config.URL)
    console.error("Error Connecting to MongoDB", error);
  });
