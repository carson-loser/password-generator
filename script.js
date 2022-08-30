// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Choose length, 8-128");
  console.log(passwordLength);
  var passwordOptions = "";


  var lowercase = confirm("Lowercase?");
  var uppercase = confirm("Uppercase?");
  var numeric = confirm("Numeric?");
  var specialCharacters = confirm("Special Characters?");

  console.log(lowercase);
  console.log(uppercase);
  console.log(numeric);
  console.log(specialCharacters);

  if (lowercase == true) {
    passwordOptions = passwordOptions + "abcdefghijklmnopqrstuvwxyz"
  }

  if (uppercase == true) {
    passwordOptions = passwordOptions + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (numeric == true) {
    passwordOptions = passwordOptions + "1234567890"
  }

  if (specialCharacters == true) {
    passwordOptions = passwordOptions + "!@#$%^&*"
  }

  
  var password = ""

  
  for (let index = 0; index < passwordLength; index++) {
      console.log(passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length)))
      password = password + passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length))
      
    console.log(password);
  } return password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
