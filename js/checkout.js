// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

// Exercise 6
function validateCheckout() {
  error = 0;
  // Validate fields entered by the user: name, phone, password, and email
  // event.preventDefault();  
  let name = document.getElementById("fName").value;
  let formN = document.getElementById("fName");
  let email = document.getElementById("fEmail").value;
  let formE = document.getElementById("fEmail");
  let phone = document.getElementById("fPhone").value;
  let formP = document.getElementById("fPhone");
  let password = document.getElementById("fPassword").value;
  let formPassword = document.getElementById("fPassword");
  if(name == '' || name < 3 ){
    formN.classList.add("is-invalid");
    error++;
  }
  if(email == "" || email < 3){
    formE.classList.add("is-invalid");
  }
  if(phone == "" || phone < 9){
    formP.classList.add("is-invalid");
  }
  if(password == "" || password < 4){
    formPassword.classList.add("is-invalid");
  }

  
  
  if(error>0){
    formN.classList.remove("is-invalid");
    formE.classList.remove("is-invalid");
    formP.classList.remove("is-invalid");
    formPassword.classList.remove("is-invalid");
    return false;
  }else{

      return true;
  }

  
  

}
