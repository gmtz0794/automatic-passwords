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

  if (passwordLength < 8 || passwordLength > 128) {
    alert("The password length has to be between 8 and 128 characters.");
    return '';
  }
  
  var useUppercase = confirm("Do you want to include uppercase letters?");
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useNumbers = confirm("Do you want to include numbers?");
  var useSpecialChars = confirm("Do you want to include special characters?");

  if (!useUppercase && !useLowercase && !useNumbers && !useSpecialChars) {
    alert("Select at least one character set.");
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
