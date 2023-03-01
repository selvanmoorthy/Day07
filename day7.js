// A. Get all the countries with a population of less than 2 lakhs using Filter function?
//Answer;
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
   var result = JSON.parse(request.response);

   console.log(result);
   var res =result.filter((ele)=>ele.population<100000);
   console.log(res);
}
// B.Print the following details name, capital, flag using forEach function
//answer;
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
   var result = JSON.parse(request.response);
 console.log(result);
 var result =result.forEach((ele)=>console.log((ele.name,ele.capital,ele.flag));

 };
//C.Print the total population of countries using reduce function?
//Answer;
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
   var result = JSON.parse(request.response);
 console.log(result);
 var res = result.reduce((acc,population)=>acc+cv,0);
 console.log(res);

 //D.Get all the countries from the Asia continent /region using the Filter function?

 //Answer;
 var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
   var result = JSON.parse(request.response);
 console.log(result);
 var res = result.filter((ele)=>ele.region==="Asia");
 console.log(res);

 