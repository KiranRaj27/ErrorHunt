const express = require("express");
const path = require("path");
const cors = require("cors");

// ! case study -------------- imported body parser part 1
const bodyParser = require("body-parser");
var port = process.env.PORT || 5000;

const nav = [
  {
    link: "/books",
    title: "Books",
  },
  {
    link: "/authors",
    title: "Authors",
  },
  {
    link: "/addbook",
    title: "Add Book",
  },
  {
    link: "/addauthor",
    title: "Add Author",
  },
];

const loginRouter = require("./src/routes/loginroute");
const signupRouter = require("./src/routes/signuproute");

// ! Case study ---------- corrected spelling of homerouter path part 1
const homeRouter = require("./src/routes/homerouter");
const booksRouter = require("./src/routes/booksroute");
const authorsRouter = require("./src/routes/authorsroute");

const app = new express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/home", homeRouter);
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

app.get("/", function (req, res) {
  res.render("index", {});
});

var server = app.listen(port, () => {
  console.log("Server Ready on 5000");
});
