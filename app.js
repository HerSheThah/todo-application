const express = require('express');
const bodyParser = require('body-parser');

let app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

let items = [];
let weekEndItems = ["play game", "hair spa"];

app.get("/", function(req, res) {

  let day = require(__dirname + "/date.js")
  res.render("index", {
    listTitle: day.getDate(),
    item: items
  })
})

app.get("/weekEnd", function(req, res) {
  res.render("index", {
    listTitle: "WeekEnd",
    item: weekEndItems
  })
})

app.post("/", function(req, res) {

  if (req.body.add_item == "WeekEnd") {
    weekEndItems.push(req.body.new_item)
    res.redirect("/weekEnd")
  } else {
    items.push(req.body.new_item);
    res.redirect("/")
  }
})

app.post("/deleteItem", function(req, res)
{
  console.log(req.body)
let index = items.indexOf(req.body.delete_item);
console.log(index);
items.splice(index, 1);
res.redirect("/")
})

app.get("/about", function(req, res)
{
  res.render("about")
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port 3000")
})
