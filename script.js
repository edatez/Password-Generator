// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghjklmnopqrstuvwxyz";
var specialcharacters = "!@#$%^&*()-";
var allCharacters = [];-m 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = parseInt(prompt("length of the password"))
  if (passwordLength < 8 || passwordLength > 128) {
    alert("inValid Password Length");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
