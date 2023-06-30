
  
    function check(){
        var rdb1=document.getElementById("male");
        var rdb2=document.getElementById("female");
        var rdb3=document.getElementById("others");
        if(rdb1.checked==true){
            console.log(rdb1.value);
        }
        else if(rdb2.checked==true){
            console.log(rdb2.value);
        }
        else if(rdb3.checked==true){
            console.log(rdb3.value);
        }
        else{
            console.log("please select the readio");
        }
    }