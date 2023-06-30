function validate(){
    var IsStudentNameValid = true;
    var IsStudentPasswordValid=true;
    var IsStudentCPasswordValid=true;
    var IsStudentGenderValid=true;
    var IsStudentQualificationValid=true;
    var IsStudentLanguagesValid=true;
    if(document.getElementById("txtStudentName").value=="")
    {
        IsStudentNameValid=false;
        document.getElementById("spnIsStudentNameValid").innerHTML="please enter your name";
        document.getElementById("spnIsStudentNameValid").style.color="red";

    }
    else{
        IsStudentNameValid=true;
        document.getElementById("spnIsStudentNameValid").innerHTML="valid";
        document.getElementById("spnIsStudentNameValid").style.color="green";
    }
    if(document.getElementById("pwdStudent").value==""){
        IsStudentPasswordValid=false;
        document.getElementById("spnIsStudentPasswordValid").innerHTML="please enter your pwd";
        document.getElementById("spnIsStudentPasswordValid").style.color="red";
    }
    else{
        IsStudentPasswordValid=true;
        document.getElementById("spnIsStudentPasswordValid").innerHTML="valid";
        document.getElementById("spnIsStudentPasswordValid").style.color="green";
    }
    if(document.getElementById("CpwdStudent").value==""){
        IsStudentCPasswordValid=false;
        document.getElementById("spnIsStudentCPasswordValid").innerHTML="please enter your cpassword";
        document.getElementById("spnIsStudentCPasswordValid").style.color="red";

    }
    else if(document.getElementById("CpwdStudent").value!=document.getElementById("CpwdStudent").value){
        IsStudentCPasswordValid=false;
        document.getElementById("spnIsStudentCPasswordValid").innerHTML="please enter your cpassword should be same";
        document.getElementById("spnIsStudentCPasswordValid").style.color="red";

    }
    else{
        IsStudentCPasswordValid=true;
        document.getElementById("spnIsStudentCPasswordValid").innerHTML="valid";
        document.getElementById("spnIsStudentCPasswordValid").style.color="green";

    }

    if(document.getElementById("rdbMale").checked!=true && document.getElementById("rdbFemale").checked!=true)
    {
        IsStudentGenderValid=false;
        document.getElementById("spnIsStudentGenderValid").innerHTML="please select your gender";
        document.getElementById("spnIsStudentGenderValid").style.color="red";
    }
    else{
        IsStudentGenderValid=true;
        document.getElementById("spnIsStudentGenderValid").innerHTML="valid";
        document.getElementById("spnIsStudentGenderValid").style.color="green";
    }

    if(document.getElementById("slctStudentQualification").value==-1)
    {
        IsStudentQualificationValid=false;
        document.getElementById("spnIsStudentQualificationValid").innerHTML="please select a option";
        document.getElementById("spnIsStudentQualificationValid").style.color="red";
    }
    else{
        IsStudentQualificationValid=true;
        document.getElementById("spnIsStudentQualificationValid").innerHTML="valid";
        document.getElementById("spnIsStudentQualificationValid").style.color="green";
    }

    if(document.getElementById("Tamil").checked!=true && document.getElementById("English").checked!=true)
    {
        IsStudentGenderValid=false;
        document.getElementById("spnIsStudentLanguagesValid").innerHTML="please select your languages";
        document.getElementById("spnIsStudentLanguagesValid").style.color="red";
    }
    else{
        IsStudentGenderValid=true;
        document.getElementById("spnIsStudentLanguagesValid").innerHTML="valid";
        document.getElementById("spnIsStudentLanguagesValid").style.color="green";
    }

    if(IsStudentNameValid==false || IsStudentPasswordValid==false || IsStudentCPasswordValid==false ||  IsStudentGenderValid==false || IsStudentQualificationValid==false){
        return false;
    }
    else{
        return true;
    }
}
function resetform(){
    document.getElementById("spnIsStudentNameValid").innerHTML="";
    document.getElementById("spnIsStudentPasswordValid").innerHTML="";
    document.getElementById("spnIsStudentCPasswordValid").innerHTML="";
    document.getElementById("spnIsStudentGenderValid").innerHTML="";
    document.getElementById("spnIsStudentQualificationValid").innerHTML="";

}
