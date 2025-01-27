const express = require("express");
const fileUpload = require("express-fileupload"); // middle ware for file upload
const uploadImage = require("./controller/imageController");

const app = express();
const route = express.Router();
// middlewares
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/hello", (req, res) => {
  res.send("Hello World");
});
route.post("/file/upload", uploadImage);
app.use("/", route);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
