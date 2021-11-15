
function validate(){

  let email1     =  document.getElementById("email1");
  let error     =  document.getElementById("error");

  let regex = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
  if (regex.test(email1.value)){
      error.innerHTML=("Valid Email");
      error.style.color=("green");
      return true;
  }
  else{
      error.innerHTML=("Invalid Email");
      error.style.color=("red");
      return false;
  }
}

function validate(){

    let phonenumber  =  document.getElementById("phonenumber");

    let regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

          if(regexp.test(phonenumber.value))
                {
              return true;
                }
              else
                {
                alert("Phone number should be of the format: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX");
                return false;
                }
      }  
  //     function validate(){
  //       let password=document.getElementById("Pwd1");
   
  //       var regex=  /^[A-Za-z]\w{8,15}$/;
  //       if(regex.test(password.value)) 
  //       { 
  //       return true;
  //       }
  //       else
  //       { 
  //       alert('Password must contain minimum 8 characters with atleast one uppercase letter, one lowercase letter and one number');
  //       return false;
  //       }
        
        
  //  }
  
  