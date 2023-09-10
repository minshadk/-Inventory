const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONG_URL)
  .then(() => console.log("connected to MOngodb"))
  .catch((err) => console.error(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const categoryRoutes = require("./routes/categories");
const itemRoutes = require("./routes/items");

app.use("/categories", categoryRoutes);
app.use("/items", itemRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
