const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"/views")));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require("./routes"));

app.listen(2003,()=>{
	console.log("Portfolio ready on http://localhost:2003 ");
});


