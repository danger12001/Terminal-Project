var userName = prompt("Please enter you name");
var userInput = document.getElementById("userInput");
var userInputs = document.querySelector("input");
var AiOutput = document.getElementById("AI-output");

var Prompt2 = ">" +"Hello " + userName + ", Please Answer 'Yes' or 'No': INSERT QUESTION HERE";
var Prompt3 = ">" + "INSERT NEXT QUESTION HERE";
AiOutput.innerHTML = Prompt2;
userInputs.onkeydown = function(e){
   if (e.keyCode === 13) {
     if(userInput.value == ">yes"){
       AiOutput.innerHTML = Prompt3;
     }
     userInput.value = ">";
   }
}
