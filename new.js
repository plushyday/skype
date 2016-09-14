window.onload = function(){

function sumProducts(people,days,prod){
    var koef = people*days;
  var a = prod.map(function(cur){
      
        for(var i=0;i<dayMenu.breakfast.length;i++){
            if(Object.keys(cur)[0]==dayMenu.breakfast[i]){
                return cur[dayMenu.breakfast[i]]=cur[dayMenu.breakfast[i]]*koef;
            }
        }
         for(var i=0;i<dayMenu.dinner.length;i++){
            if(Object.keys(cur)[0]==dayMenu.dinner[i]){
               return  cur[dayMenu.dinner[i]]=cur[dayMenu.dinner[i]]*koef;
            }
        }
         for(var i=0;i<dayMenu.supper.length;i++){
            if(Object.keys(cur)[0]==dayMenu.supper[i]){
               return  cur[dayMenu.supper[i]]=cur[dayMenu.supper[i]]*koef;
            }
        }
        
    });
    
   return a;
    }

var prod =[
    {"tea":4},
    {"coffee":5},
    {"sugar":	10},
    {"salt":	5},
    {"cookies":	20},
    {"cracker":	15},
    {"onion":	10},
    {"buckwheat":	50},
    {"soup":	20},
   ];

var dayMenu ={
   breakfast: ["coffee","sugar","cookies","cracker"],
   dinner:["tea","cracker","onion","salt","sugar"],
   supper:["salt","sugar","tea","soup","buckwheat"]
};

sumProducts(2,4,prod);

var inrhtml ="breakfast:<br><br>";

for(var i=0;i<dayMenu.breakfast.length;i++){
    for (var j=0;j<prod.length;j++){
        if(dayMenu.breakfast[i]==Object.keys(prod[j])[0]){
            if(dayMenu.breakfast[i]=="cracker"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]/2+"<br>";
            }else if(dayMenu.breakfast[i]=="sugar"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+(prod[j][Object.keys(prod[j])[0]]/3).toFixed(0)+"<br>";
            }else{
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]+"<br>";
            }
        }
    }
}

inrhtml+="<br><br>dinner:<br><br>";

for(var i=0;i<dayMenu.dinner.length;i++){
    for (var j=0;j<prod.length;j++){
        if(dayMenu.dinner[i]==Object.keys(prod[j])[0]){
            if(dayMenu.dinner[i]=="cracker"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]/2+"<br>";
            }else if(dayMenu.dinner[i]=="sugar"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+(prod[j][Object.keys(prod[j])[0]]/3).toFixed(0)+"<br>";
            }
            else if(dayMenu.dinner[i]=="tea"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]/2+"<br>";
            }
            else if(dayMenu.dinner[i]=="salt"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]/2+"<br>";
            }else{
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]+"<br>";
            }
        }
    }
}

inrhtml+="<br><br>supper:<br><br>";

for(var i=0;i<dayMenu.supper.length;i++){
    for (var j=0;j<prod.length;j++){
        if(dayMenu.supper[i]==Object.keys(prod[j])[0]){
            if(dayMenu.supper[i]=="cracker"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]/2+"<br>";
            }else if(dayMenu.supper[i]=="sugar"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+(prod[j][Object.keys(prod[j])[0]]/3).toFixed(0)+"<br>";
            }
            else if(dayMenu.supper[i]=="tea"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]/2+"<br>";
            }
            else if(dayMenu.supper[i]=="salt"){
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]/2+"<br>";
            }else{
                inrhtml+="&ensp;&ensp;"+Object.keys(prod[j])[0]+" - "+prod[j][Object.keys(prod[j])[0]]+"<br>";
            }
        }
    }
}

document.getElementById('info').innerHTML=inrhtml;

}