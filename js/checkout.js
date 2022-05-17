// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

// Exercise 6
function validate(event) {
  // Validate fields entered by the user: name, phone, password, and email
  // event.preventDefault();  
  let name = document.getElementById("fName").value;
  let formN = document.getElementById("fName");
  if(name.length <3 ){
    formN.classList.remove("is-valid");
    formN.classList.add("is-invalid");
    return;
  }
  else{
    formN.classList.remove("is-invalid");
    formN.classList.add("is-valid");
    return;
  }
  // ---------

  
  

}
