function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var message = document.getElementById("message").value;

if(name===""){
    error.innerText = "Name is required";
    return false;
}
if(!email.includes("@")){
    error.innerText = "Email is required";
    return false;
}
if(contact===""){
    error.innerText = "Please enter your contact";
    return false;
}
if(message===""){
    error.innerText = "Please state your inquiry";
    return false;
}

return true;
}