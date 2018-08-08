const MongoClient=require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
MongoClient.connect(url,(err,client)=>{
    if(err)
    {
       return console.log('Unable to connect database');
    }
    console.log('conected to mongo db');

   client.db(dbName).collection('Todos').find().toArray().then((todo)=>{
      console.log(JSON.stringify(todo));
   },(err)=>{
      console.log(`error ${err}`);
   });
  
    
});