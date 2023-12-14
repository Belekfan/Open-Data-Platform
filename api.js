var express = require("express");
var app = express();

var json=require("./data/linkler-belediye.json")

var json2=require("./data/yurt-disi.json")

const str=JSON.parse(JSON.stringify(json));

const str2=JSON.parse(JSON.stringify(json2))

for (var i = 0; i < str.links.length; i++) {
    var counter = str.links[i];
    arr.push(counter.subject);
    arr2.push(counter.source);
    arr3.push(counter.comment);
    arr4.push(counter.link);
}

for (var i = 0; i < str2.links.length; i++) {
    var counter2 = str2.links[i];
    arr5.push(counter2.subject);
    arr6.push(counter2.source);
    arr7.push(counter2.comment);
    arr8.push(counter2.link);
}


app.get('/yurtici/:query',(req,res)=>{
    query=req.params["query"];
    var data=[];
    let i=-1;
    arr.forEach(element => {
        i++;
        var variable=arr2[i];
        var variable2=arr3[i];
        var variable3=arr4[i];
        if(element.includes(query)){
            data.push(element+"&&"+variable+"&&"+variable2+"&&"+variable3); 
        }
        else{
            
        }
        
      });
             res.send(data);
             res.end();
    
   });



   app.get('/yurtdisi/:query',(req,res)=>{
    query=req.params["query"];
    var data=[];
    let i=-1;
    arr5.forEach(element2 => {
        i++;
        var variable4=arr6[i];
        var variable5=arr7[i];
        var variable6=arr8[i];
        if(element.includes(query)){
            data.push(element2+"&&"+variable4+"&&"+variable5+"&&"+variable6); 
        }
        else{
            
        }
        
      });
             res.send(data);
             res.end();
    
   });
   
   



   app.listen(3000);


