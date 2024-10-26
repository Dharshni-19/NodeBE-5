const config = require("./utils/config");
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb://0.0.0.0:27017/mydatabase")
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
