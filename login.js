
function validate(){

    let email     =  document.getElementById("email");
    let errorr    =  document.getElementById("errorr");

    var regexp = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if (regexp.test(email.value)){
        errorr.innerHTML=("Valid Email");
        errorr.style.color=("green");
        return true;
    }
    else{
        errorr.innerHTML=("Invalid Email");
        errorr.style.color=("red");
        return false;
    }

}
function validate(){
     let password=document.getElementById("password1");

     var regex=  /^[A-Za-z]\w{8,15}$/;
     if(regex.test(password.value)) 
     { 
     return true;
     }
     else
     { 
     alert('Password must contain minimum 8 characters with atleast one uppercase letter, one lowercase letter and one number');
     return false;
     }
     
     
}
