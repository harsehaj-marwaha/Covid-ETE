function showData()

{
    
event.preventDefault();
 
   var country=document.getElementById("name1").value;

    var sDate=document.getElementById("startdate").value;
  
  var eDate=document.getElementById("enddate").value;

 
   var confirmed=document.getElementById("confirmedcase");

    var active=document.getElementById("activecase");
  
  var deaths=document.getElementById("deathcase");

    
console.log(sDate);

  
  if(country=='' || startdate=='' || enddate=='')
  
  alert("enter the required field");

 
   else
   
 {
        
var url="https://api.covid19api.com/country/"+country+"?from="+sDate+"T00:00:00Z&to="+eDate+"T00:00:00Z";

   
fetch(url) 
.then((res) => res.json())
 
       .then((res) => {

            console.log(res);
 
           var length=res.length;

            var index=length-1;

 
           var c=res[index].Confirmed;
  
          var a=res[index].Active;
   
         var d=res[index].Deaths;

 
           confirmed.innerHTML=c;
  
          active.innerHTML=a;
           
 deaths.innerHTML=d;

         
   document.getElementById("res").style.display="block";
            
    
    })
   
 }
}