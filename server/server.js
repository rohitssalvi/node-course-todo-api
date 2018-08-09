var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Todo} =require('./models/Todo');

var App=express();
const port=process.env.PORT || 3000;

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

App.get('/todos/:id',(req,res)=>{
 
res.send(req.params);

});


App.listen(port,()=>{
    console.log(`started port ${port}`);
});