const express=require('express')
const EventEmitter=require('events')
const event=new EventEmitter();

const app=express();
let count=0;
event.on('countApi',()=>{
    count++;
    console.log('called countApi',count);
})
app.get('/',(req,res)=>{ 

    res.send('API called');
    
})
app.get('/search',(req,res)=>{ 

    res.send('This is the search box');
    event.emit('countApi')
})
app.get('/update',(req,res)=>{ 

    res.send('This is the update box');
  
})
app.listen(5050,()=>console.log('this is the express server'))