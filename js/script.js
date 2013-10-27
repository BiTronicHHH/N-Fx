 function change(){
var x = document.getElementById("name").value;
if  (x!=""){
document.getElementById("para").innerHTML = " hello there "+x+" how is it going";
document.getElementById("name").disabled=true;
document.getElementById("button").disabled=true;
}
else
{
alert("Please enter your name into the text box");
}

}

function changeimage(){
var x = document.getElementById("image").src="images/header1.jpg";
}
function changeback(){
var x = document.getElementById("image").src="images/header.jpg";
}

function greetingmessage()
{

var d = new Date();
var day = new Array();
day[0] = "Sunday";
day[1] = "Manday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

alert(day[5]);

var time = d.getHours();



if  (time<12){
document.getElementById("greetings").innerHTML = "Good Morning today is  "+time+" !";
}
else if (time<18)
{
document.getElementById("greetings").innerHTML = "Good Afternoon today is  "+time+" !";
}
else
{
document.getElementById("greetings").innerHTML = "Have a goog day today is  "+time+" !";
}
}