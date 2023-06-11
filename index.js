const express = require("express");
const app = express();
const path = require("path");
const router = require('./routers/router');

// View Engin Setup
app.set('views',path.join(__dirname,'views'));
app.set('view engin','ejs');


// Default Use
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));



// Routing
app.use(router);



// Error Handler
app.use((req,res,next)=>{
  res.send('<h1 style="color:red;">Requested url was not found!</h1>')
})

app.use((err,req,res,next)=>{
  if(res.headersSend){
    next('Already Header Send. There was a problem.')
  }
  else{
    if(err.message){
      res.status(500).send(err.message);
    }
    else{
      res.send('There was wrong!')
    }
  }
})


// Server listen
const port = process.env.PORT || 5000;
app.listen(port,()=>'Server is Running');