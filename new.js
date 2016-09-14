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

var inrhtml="";

for(var i=0;i<prod.length;i++){
    inrhtml+=Object.keys(prod[i])[0]+" - "+prod[i][Object.keys(prod[i])[0]]+"<br>";
}
document.getElementById('info').innerHTML=inrhtml;

}