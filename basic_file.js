const express = require("express");

const path=require('path');

const adminRoutes=require('./routes/admin');

const shopRoutes=require('./routes/shop');

const bodyParser = require("body-parser");
const { error } = require("console");

const app = express();

// Use body-parser's JSON middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
                           
app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','error.html'))
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
