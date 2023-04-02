// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = parseInt(prompt("How long do you want your password to be? (Between 8 and 128 characters)"))
  
  
   while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Please enter a password length between 8 and 128 characters"))
  }

  var includeLowercace = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumberic = confirm("Include numberic characters?");
  var includeSpecials = confirm("Include special characters?");

  if (!includeLowercace && !includeUppercase && !includeNumberic && !includeSpecials) {
    alert ("You must at least pick one of the choices!")
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOpQRSTUVWXYZ";
  var numbericChars = "0123456789";
  var specialChars = "!@#$%^&*()-=[]\;',./_+{}|:<>?";

  let charsToUse = "";
  if (includeLowercace) charsToUse += lowercaseChars;
  if (includeUppercase) charsToUse += uppercaseChars;
  if (includeNumberic) charsToUse += numbericChars;
  if (includeSpecials) charsToUse += specialChars;

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
   let randomIndex = Math.floor(Math.random() * charsToUse.length);
   let randomChar = charsToUse.charAt(randomIndex);

   password += randomChar;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
