// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create array of characters to choose from
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specChar = ["!", "\"", "#", "$", "%", "&", "\'", "\(", "\)", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  function generatePassword () {

    var allPossibleChar = [];
    var generatedPassword = "";
  

    // User chooses valid input password length
    var length = parseInt(prompt("How long would you like your password to be?"));

    if (length < 8 || length > 128) {
      alert('Invalid Input: Your password must be more than 8 charaters and less than 128 characters.');
    }
  
      // How do I keep the user from moving on here until a valid password length is chosen?

    // Confirms if user wants to include numbers
    var num = confirm("Do you want to include numbers?");
    if (num === true) {
      allPossibleChar = allPossibleChar.concat(numbers);
    }

    // Confirms if user wants to include uppercase letters
    var charTypeUpper = confirm("Would you like to include upper case letters?");
    if (charTypeUpper === true) {
      allPossibleChar = allPossibleChar.concat(charUpper);
    }

    //  Confirms if user wants to include lower case letters
    var charTypeLower = confirm("Would you like to include lower case characters?");
    if (charTypeLower === true) {
      allPossibleChar = allPossibleChar.concat(charLower);
    }

    //  Confirms if user wants to include special characters
    var charTypeSpec = confirm("Do you want to include speciall characters?");
    if (charTypeSpec === true) {
      allPossibleChar = allPossibleChar.concat(specChar);
    }
  

    for (i = 0; i < length; i++) {
      var randNum = Math.floor(Math.random() * allPossibleChar.length);
     generatedPassword = generatedPassword + (allPossibleChar[randNum]);
    }
   
    return generatedPassword;

  }


  