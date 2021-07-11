function myFunction() {
    let username = document.regForm.username.value;
    let password = document.regForm.password.value;
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;
    if (username.includes("@") == false) {
      document.getElementById("error-username").style.display = "block";
      document.getElementById("error-username").innerHTML =
        "Username should contain @ ";
      return false;
    }
    if (password.length < 4) {
      document.getElementById("error-password").style.display = "block";
      document.getElementById("error-password").innerHTML =
        "Password should be of length greater than 3";
      return false;
    }
    if (password.search(/[A-Z]/) < 0 || password.search(/[!@#$%^&]/) < 0 || password.search(/[a-z]/)<0 || password.search(/[0-9]/)<0) {
      document.getElementById("error-password").style.display = "block";
      document.getElementById("error-password").innerHTML =
        "Password should be a combination of lowercase/uppercase/special character/number";
      return false;
    }
    return true;
    // document.getElementById("try").innerHTML = username + password;
  }
  
function openForm() {
if(document.getElementById("form1").style.display == "none"){
  document.getElementById("form1").style.display = "block";
}
else{
  document.getElementById("form1").style.display = "none";
}
  

}