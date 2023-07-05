// Assignment code here
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialChars = '`~!@#$%^&*()-_=+[]{};:",.<>/?';

function generatePassword() {
  var passwordLength = prompt("Enter the length of password:");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength)) {
    alert("Action Invalid. Please enter a number.");
    return '';
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
