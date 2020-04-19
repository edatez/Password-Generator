// Series of prompts
// prompt the user for the length of the password that they want to generate

// function addAll(x) {
//     var added = 1;
//     for (var i = 1; i <= x; i++) {
//         added += i;
//     }
//     return added;
// }
// function startNewPassword() {
// }


var passwordLength = 0;
var numeric = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghjklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()-";
var allCharacters = [];

// Validate that their response is between 8 and 128.
function isPAsswordLEngthCorrect(passwordLength) {
    return passwordLength >= 8 && passwordLength <= 128;
}

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    var n = arr.length;              // Length of the array
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       // Get random of [0, n-1]
      
      var temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
  }

function generatePassword() {
    passwordLength = 0;

    // Reprompt them to input a correct value if they didn't give a valid one.
    // while password is not correct
    while (!isPAsswordLEngthCorrect(passwordLength)) {
        passwordLength = prompt('Provide a password length between 8 and 128');
    }
    console.log(passwordLength);

    // Prompt user for a series of config options; lowercase, uppercase, numeric, and/or special characters
    var options = {
        "passwordLength": passwordLength,
        "lowercase": confirm("Would you like lowercase letters in your password?"),
        "uppercase": confirm("Would you like uppercase letters in your password?"),
        "numeric": confirm("Would you like numbers in your password?"),
        "specialCharacters": confirm("Would you like special characters letters in your password?"),
    };

    var password = '';
    possibleCharacters = [];
    requiredCharacters = [];

    // If the user chose lowercase    
    if (options.lowercase) {
        possibleCharacters = possibleCharacters.concat(lowercase);
    }
    // If the user chose uppercase
    if (options.uppercase) {
        possibleCharacters = possibleCharacters.concat(uppercase);
        requiredCharacters.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
    // If the user chose special characters
    if (options.specialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        requiredCharacters.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
    }
    // if the user chose numeric    
    if (options.numeric) {
        possibleCharacters = possibleCharacters.concat(numeric);
        requiredCharacters.push(numeric[Math.floor(Math.random() * numeric.length)]);
    }
    // need to make the password with possible characters
    // put into text box. 

    for (var i = 0; i < options.passwordLength; i++) {
        if (requiredCharacters[i]) {
            password += requiredCharacters[i];
        } else {
            var possibleCharacterString = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
            password += possibleCharacterString.charAt(Math.floor(Math.random() * possibleCharacterString.length));
        }
    }
    return shuffle (password);
    
}

var result = [];


// var password = generatePassword(options);
// document.getElementById("password").textContent = password;

console.log(result);

console.log(typeof password);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);