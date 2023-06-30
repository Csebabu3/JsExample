const d=new Date();

//document.getElementById("demo").innerHTML=('{d.getFullYear()}-{d.getMonth()}-{d.getDay()}-{d.getDate()})';
document.getElementById("demo").innerHTML=(d.getFullYear() +"-" + (d.getMonth()+1)+"-" +d.getDate()+",  "+d.getHours()+"hr : "+d.getMinutes()+"min : "+d.getSeconds()+"sec : "+d.getMilliseconds()+"ms");
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("demo1").innerHTML=(d.getFullYear() +"-" + months[(d.getMonth()+1)]+"-" +d.getDate());
//document.getElementById("demo").innerHTML=(`${months[d.getMonth()]} - ${d.getFullYear()} - ${d.getDate()}`)
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo2").innerHTML=(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+days[d.getDay()]);
document.getElementById("demo3").innerHTML=(d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate());