const express=require('express');
const app=express();
const port=8000;
const path=require('path');

// Set up view engine 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


// app.post("/tasks", (req, res) => {
//     res.send("Hello");
//  });

 app.post("/tasks", (req, res) => {
    res.send("Hello");
 });
// Port
app.listen(port,function(err){
    if(err){
        console.log("Error : ",err);
    }
    console.log(`Server is running on port : ${port}`);
});