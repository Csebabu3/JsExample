const submit_button=document.querySelector(".button");
submit_button.onclick=()=>{
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const email=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
    const cpass=document.getElementById("cpass").value;

    localStorage.setItem("FirstName",fname);
    localStorage.setItem("LastName",)
}