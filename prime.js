function prime(){
    var a=document.getElementById("num").value;
    for(var i=2;i<a;i++){
        if(a%i==0){
          document.getElementById("screen").innerHTML=a+" is not a prime";
            break;
        }
        else{
            document.getElementById("screen").innerHTML=a+" is a prime";
        }
    }
}