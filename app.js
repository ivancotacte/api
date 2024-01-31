const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const home = require("./routes/home");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.use("/", home);

app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});