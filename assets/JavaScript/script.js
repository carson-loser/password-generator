// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  // if statement allows code to return out of writePassword function if it is empty or doesnt meet beginning criteria
  // will not log "undefined" when entering an unaccepted value into a prompt
  if (!password) {
    return
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// function generatePassword sets up a prompt for password length
function generatePassword() {
  var passwordLength = prompt("Choose length, 8-128");
  console.log(passwordLength);

  // leaves passwordOptions empty so that it can be filled out as the user makes their selections accordingly
  var passwordOptions = "";

  // creates an if statement where if the inputted values is less than 8 OR greater than 128, user will be prompted to pick a new number to fit criteria
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick a number between 8 and 128")
    return
  }

  // creates variables and confirm prompts for each type of requested type of character
  var lowercase = confirm("Would you like lowercase characters in your password?");
  var uppercase = confirm("Would you like uppercase characters in your password?");
  var numeric = confirm("Would you like numeric values in your password?");
  var specialCharacters = confirm("Would you like special characters in your password?");
  
  // if statement that requires user to select at least one prompt 
  if (!lowercase && !uppercase && !numeric && !specialCharacters) {
    alert("please select at least one choice");
    return;
  }
  // logs each variable that is tied to a prompt in order
  console.log(lowercase);
  console.log(uppercase);
  console.log(numeric);
  console.log(specialCharacters);

  // if statements (if selected) will add the passwordOptions (which has no value currently) with one selected character from the string
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

// if you see this message, could you break this down into simpler terms so that I can see it in writing? I had a live tutor help me write this out, but I am still a little unsure about what it all really does. Thanks! :)
  for (var index = 0; index < passwordLength; index++) {
    console.log(passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length)))
    password = password + passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length)) 

    console.log(password);
  } return password







}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
