

function checkleapyear(){
    let text =document.getElementById("year").value;
    if(text % 4 ==0)
    {
       document.getElementById("leap").innerHTML=("This is a leapyear "+text);
    }
    else{ 
        document.getElementById("leap").innerHTML=("this is not a leapyear "+text);
    }
}
