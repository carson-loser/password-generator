// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (!password) {
    return
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Choose length, 8-128");
  console.log(passwordLength);
  var passwordOptions = "";

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick a number between 8 and 128")
    return 
  }

  var lowercase = confirm("Would you like lowercase characters in your password?");
  var uppercase = confirm("Would you like uppercase characters in your password?");
  var numeric = confirm("Would you like numeric values in your password?");
  var specialCharacters = confirm("Would you like special characters in your password?");

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
    passwordOptions = passwordOptions + "1234567890123456789"
  }

  if (specialCharacters == true) {
    passwordOptions = passwordOptions + "!@#$%^&*!@#$%^&*!@#$"
  }


  var password = ""


  for (var index = 0; index < passwordLength; index++) {
    console.log(passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length)))
    password = password + passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length))

    console.log(password);
  } return password

  





}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
