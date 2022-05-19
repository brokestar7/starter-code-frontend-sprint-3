// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

// Exercise 6
function validateCheckout(event) {
  // Validate fields entered by the user: name, phone, password, and email
  error = 0;
  event.preventDefault();  
  let formN = document.getElementById("fName");
  let formLName = document.getElementById("fLastN");
  let formAddress = document.getElementById("fAddress");
  let formE = document.getElementById("fEmail");
  let formP = document.getElementById("fPhone");
  let formPassword = document.getElementById("fPassword");
  if(formN.value == "" || formN.value.length < 3 ){
    formN.classList.add("is-invalid");
    error++;
  }
  else{
    formN.classList.remove("is-invalid");
  }
  if(formLName.value == "" || formLName.value.length < 3 ){
    formLName.classList.add("is-invalid");
    error++;
  }
  else{
    formLName.classList.remove("is-invalid");
  }
  if(formAddress.value == "" || formAddress.value.length < 3 ){
    formAddress.classList.add("is-invalid");
    error++;
  }
  else{
    formAddress.classList.remove("is-invalid");
  }
  if(formE.value == "" || formE.value.length < 3){
    formE.classList.add("is-invalid");
    error++;
  }
  else{
    formE.classList.remove("is-invalid");
  }
  if(formP.value == "" || formP.value.length != 9){
    formP.classList.add("is-invalid");
    error++;
  }
  else{
    formP.classList.remove("is-invalid");
  }
  if(formPassword.value == "" || formPassword.value.length < 4){
    formPassword.classList.add("is-invalid");
    error++;
  }
  else{
    formPassword.classList.remove("is-invalid");
  }

  
  
  if(error>0){
    return false;
  }else{
    formN.classList.remove("is-invalid");
    formLName.classList.remove("is-invalid");
    formAddress.classList.remove("is-invalid");
    formE.classList.remove("is-invalid");
    formP.classList.remove("is-invalid");
    formPassword.classList.remove("is-invalid");
    
      return true;
  }

  
  

}
