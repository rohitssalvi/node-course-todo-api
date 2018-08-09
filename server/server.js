var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Todo} =require('./models/Todo');

var App=express();


App.use(bodyParser.json());

App.post('/todos',(req,res)=>{
    var newTodo=new Todo({
        text:req.body.text
    });

    newTodo.save().then((docs)=>{
      res.send(docs)
    },(e)=>{
       res.status(400).send(e);
    })

});


App.get('/todos',(req,res)=>{
  Todo.find().then((docs)=>{
    res.send({docs});
  },(e)=>{
    res.status(400).send(e);
  })
});
App.listen(3000,()=>{
    console.log('started port 3000');
});