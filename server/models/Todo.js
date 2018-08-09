var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
    text:{
      type:String,
      required:true,
      trim:true,
      minLength:1
    },
    completed:{
     type:Boolean,
     default:false
    },
    compeletedAt:{
     type:Number,
     default:null
    }

});

module.exports={Todo};