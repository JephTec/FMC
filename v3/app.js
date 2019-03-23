const bodyParser  = require('body-parser'),
      mongoose    = require('mongoose'),
      express     = require("express"),
      app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
  res.render("index.ejs");  
});

app.listen(3000, ()=>{
  console.log("FMC Server Started");
});
