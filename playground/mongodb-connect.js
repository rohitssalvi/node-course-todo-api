const MongoClient=require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'TodoApp';
MongoClient.connect(url,(err,client)=>{
    if(err)
    {
       return console.log('Unable to connect database');
    }
    console.log('conected to mongo db');

   const col=client.db(dbName).collection('Todos').insertOne({
       text:'somthing',
       completed:false
   },(err,result)=>{
    if(err)
    {
       return console.log('Error',err);
    }

    console.log(JSON.stringify(result.ops));
   });
  
    client.close();
});