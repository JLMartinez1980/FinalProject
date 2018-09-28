const express = require("express");
// const mongooose = require("mongoose");
const app = express();
// const users = require("./routes/api/users");
// const profile = require("./routes/api/profile");
// const posts = require("./routes/api/posts");

// //DB CONFIG
// const db = require("./config/keys").mongoURI;
// //CONNECT TO MONGODB (this is a promise statement)
// mongooose
//   .connect(db)
//   .then(() => console.log("MongoDB Connected!"))
//   .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Funky Bunz!"));

//USE PORTS
// app.use("/api/users", users);
// app.use("/api/profile", profile);
// app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server up and running on port ${port}!! :D`)
);