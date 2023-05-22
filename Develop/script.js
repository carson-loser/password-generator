var generateBtn = document.querySelector("#generate");
var passwordTextArea = document.querySelector("#password");

function generatePassword() {
  var input;
  do {
    input = parseInt(prompt('Enter the desired amount of characters (8-16)'));

    if (isNaN(input) || input < 8 || input > 16) {
      alert('Please enter a valid number between 8 and 16.');
    }
  } while (isNaN(input) || input < 8 || input > 16);


  var includeUppercase = confirm('Would you like uppercase characters?');
  var includeLowercase = confirm('Would you like lowercase characters?');
  var includeNumbers = confirm('Would you like numbers?');
  var includeSpecial = confirm('Would you like special characters? (!@#$%^&*()_+)');

  var charSet = '';
  if (includeLowercase) {
    charSet += 'abcdefghijklmnopqrstuvwxyz'
  };

  if (includeUppercase) {
    charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  };

  if (includeNumbers) {
    charSet += '1234567890'
  };

  if (includeSpecial) {
    charSet += '!@#$%^&*()_+'
  };

  var password = '';
  for (let i = 0; i < input; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  };

  passwordTextArea.value = password;
  console.log(`Generated Password: ${password}`)
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
